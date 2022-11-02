<template>
    <Modal
        @hidden="setCurrentItem(null);$emit('createUpdateFormHidden',true)"
        v-model="showCreateUpdateModal"
        v-bind="createUpdateModalProps"
        static
        ok-title="Submit"
        @ok.prevent="handleSubmit"
        :title="createUpdateModalTitle">
        <slot name="create_update"
              :shown="showCreateUpdateModal"
              :currentItem="currentItem"
              :handleSubmit="handleSubmit">
            <template v-if="currentItem && showCreateUpdateModal">
                <form @submit.prevent="handleSubmit">
                    <Row>
                        <Col
                            v-for="prop in Object.keys(currentItem).filter(i=>!excludeFromCreateUpdateForm.includes(i))"
                            :md="4"
                            :sm="12">
                            <FormGroup :label="getFormInputLabel(prop)">
                                <component
                                    :is="getComponentName(prop)"
                                    v-model="currentItem[prop]"
                                    v-bind="getAttributeBindings(prop)"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </form>
            </template>
        </slot>
    </Modal>
    <Modal
        @hidden="setCurrentItem(null)"
        v-model="showViewModal"
        v-bind="viewModalProps"
        :title="viewModalTitle">
        <slot name="view" :currentItem="currentItem" :shown="showViewModal">
            <template v-if="currentItem && showViewModal">
                <Table bordered hover striped small>
                    <TBody>
                    <Tr v-for="row in viewableItems">
                        <Th>{{ startCase(row) }}</Th>
                        <Td>
                            <template v-if="['created_at','updated_at'].includes(row)">
                                {{ dateFormat(currentItem[row]) }}
                            </template>
                            <template v-else>
                                {{ currentItem[row] }}
                            </template>
                        </Td>
                    </Tr>
                    </TBody>
                </Table>
            </template>
        </slot>
    </Modal>
    <Card body-class="p-0" class="mb-3" :title="title">
        <template #header>
            <Row>
                <Col :md="1" :sm="12" :lg="1">
                    <Select
                        @change="()=>{
                            items.current_page=1;
                            getItems();
                        }"
                        v-model="items.per_page"
                        :options="pager"
                        size="sm"
                    />
                </Col>
                <Col class="text-center" :sm="12" :md="4">
                    <Input type="search" :placeholder="searchPlaceholder" :size="searchSize"/>
                </Col>
                <Col :sm="12" :md="7" class="text-md-end text-sm-start">
                    <ButtonGroup size="sm" class="me-md-2" v-if="$slots['header-right']">
                        <slot name="header-right" :getItems="getItems" :initAddForm="initAddForm"></slot>
                    </ButtonGroup>
                    <ButtonGroup size="sm">
                        <Button @click="getItems">
                            <ArrowRepeat/>
                        </Button>
                        <Button variant="primary" @click="initAddForm">
                            <Plus/>
                        </Button>
                        <Button variant="danger">
                            <Trash/>
                        </Button>
                        <Dropdown menu-tag="ul"
                                  size="sm"
                                  disable-inner-clicks
                                  menu-class="border-0 p-0">
                            <ListGroupItem v-for="node in theCols">
                                <label class="form-check-label d-block">
                                    <input type="checkbox"
                                           class="form-check-input"
                                           @change="e=>{
                                               node.props.visible=e.target.checked;
                                               hackReRendered=Math.random()*1000;
                                           }"
                                           :checked="node.props.visible!==false">
                                    {{ getLabel(node) }}
                                </label>
                            </ListGroupItem>
                        </Dropdown>
                    </ButtonGroup>
                </Col>
            </Row>
        </template>

        <Table v-bind="getTableProps" v-if="hackReRendered" :responsive="true">
            <THead :variant="headVariant" :class="headClass">
            <Tr>
                <template v-for="(node,node_key) in theCols">
                    <Th v-if="node.props.visible!==false" :class="node.props.thClass||node.props['th-class']">
                        {{ getLabel(node) }}
                    </Th>
                </template>
            </Tr>
            </THead>
            <TBody>
            <Tr v-if="loading">
                <Td class="text-center" style="min-height: 200px;vertical-align: middle;"
                    :colspan="theCols.filter(node=>node.props.visible!==false).length||1">
                    <Spinner/>
                    <br>
                    <h3>Loading.......</h3>
                </Td>
            </Tr>
            <template v-else>
                <Tr v-for="(item,item_key) in items.data" :key="item_key">
                    <template v-for="(node,node_key) in theCols">
                        <RenderColumnVNode
                            :class="node.props.tdClass||node.props['td-class']"
                            v-if="node.props.visible!==false"
                            :item="item"
                            :node="node"
                        />
                    </template>
                </Tr>
            </template>
            </TBody>
        </Table>
        <template #footer>
            <Row>
                <Col>
                    Total: {{ items.total }}, Pages: {{ items.last_page }}
                </Col>
                <Col>
                    <Pagination
                        @change="getItems"
                        class="mb-0"
                        size="sm"
                        align="end"
                        v-model="items.current_page"
                        :total-rows="items.total"
                        :per-page="items.per_page">
                    </Pagination>
                </Col>
            </Row>
        </template>
    </Card>
</template>

<script lang="ts">
import {defineComponent, PropType, Ref} from "vue";
import RenderColumnVNode from "./RenderColumnVNode";
import {
    TBody, Th, Td, Tr, THead, Table, CardTitle, Card,
    Spinner, Row, Col, Select, Button, ButtonGroup, Input, Dropdown,
    Checkbox, ListGroupItem, Modal, FormGroup, Pagination
} from "./../index";
import Column from "./Column.vue";
import {Plus, Trash, ArrowRepeat} from "@wovosoft/wovoui-icons";

import tableProps from "../shared/tableProps";


import type {ButtonSizes} from "../types";
import type {ColorVariants} from "../types/colorVariants";
import type {classTypes} from "../types/classTypes";


type FieldType = {
    label: string,
    key: string,
    formatter: CallableFunction | null | undefined
}

import setup from "../shared/laravelcrud/setup";
import fetchItems from "./../shared/laravelcrud/fetchItems";
import axios, {AxiosStatic} from "axios";

export default defineComponent({
    emits: ['createUpdateFormHidden'],
    setup,
    name: "LaravelCrudTable",
    components: {
        FormGroup, Modal, ListGroupItem, Checkbox, Dropdown, Input, ButtonGroup, Button, Select, Col, Row,
        Column, TBody, Th, Td, Tr, THead, Table, CardTitle, Card, RenderColumnVNode,
        Spinner, Plus, Trash, ArrowRepeat, Pagination
    },
    props: {
        /**
         * axios instance, if nothing special is applied, then it can be omitted, default axios will be used.
         */
        axiosPromise: {default: axios},
        apiUrl: {type: String as PropType<string>, default: null, required: true},
        title: {type: String as PropType<string>, default: null},
        titleTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h4"},
        fields: {type: Array as PropType<string[] | FieldType[] | null>, default: () => ([])},
        pager: {type: Array as PropType<number[]>, default: () => [5, 10, 15, 20, 30, 50, 70, 100, 150, 200, 300, 500]},
        searchPlaceholder: {type: String as PropType<string>, default: "Search..."},
        searchSize: {type: String as PropType<ButtonSizes>, default: "sm"},
        ...tableProps,
        headVariant: {type: String as PropType<ColorVariants>, default: null},
        headClass: {type: [String, Object, Array] as PropType<classTypes>, default: null},
        viewModalTitle: {type: String as PropType<string>, default: "View Details"},
        createUpdateModalTitle: {type: String as PropType<string>, default: "Add/Edit Details"},
        /**
         * All props supported by modal. These object will be directly passed to the modal component.
         */
        viewModalProps: {type: Object as PropType<object>, default: null},
        createUpdateModalProps: {type: Object as PropType<object>, default: null},

        /**
         * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
         */
        dateLocale: {type: String as PropType<string>, default: "en-US"},
        dateOptions: {type: Object as PropType<object>, default: () => ({})},

        /**
         * Skips fields from default view.
         * Applicable when default scope is not provided.
         */
        excludeFromView: {type: Array as PropType<string[]>, default: () => ([])},
        includeOnlyInView: {type: Array as PropType<string[]>, default: () => ([])},
        excludeFromCreateUpdateForm: {
            type: Array as PropType<string[]>,
            default: () => (["id", "created_at", "updated_at", "deleted_at"])
        },

        /**
         * Create-Update Form Fields
         */
        createUpdateFormFields: {
            type: Object as PropType<object>,
            default: () => ({})
        },

        /**
         * Data Submission URL
         */
        formSubmitUrl: {type: String as PropType<string>, default: null},
        formUpdateUrl: {type: [String, Function] as PropType<string | ((url: object) => string)>, default: null},

        /**
         *  Form Submission Handler Function, when executes the currentItem object will be provided as parameter
         */
        handleFormSubmit: {type: Function as PropType<(item: object) => void>, default: null},

        /**
         * destroy url: should be string or link generator
         */
        destroyUrl: {type: [String, Function] as PropType<string | ((url: object) => string)>, default: null},
        destroyHandler: {type: Function as PropType<(item: object) => void>, default: null},
        defaultFormObject: {type: Object as PropType<object>, default: () => ({})},
        fetchItems: {
            type: Function as PropType<(loading: Ref<boolean>, apiUrl: string, items: Ref<any>, axiosPromise: AxiosStatic, props: object) => Promise<unknown>>,
            default: fetchItems
        },
        withQuery: {type: Object as PropType<object | null>, default: null}
    }
})
</script>