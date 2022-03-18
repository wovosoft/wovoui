<template>
    <Modal
        @hidden="currentItem=null"
        v-model="showCreateUpdateModal"
        v-bind="createUpdateModalProps"
        static
        ok-title="Submit"
        @ok.prevent="handleSubmit"
        :title="createUpdateModalTitle">
        <slot name="create_update" :currentItem="currentItem">
            <template v-if="currentItem">
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
        @hidden="currentItem=null"
        v-model="showViewModal"
        v-bind="viewModalProps"
        :title="viewModalTitle">
        <slot name="view" :currentItem="currentItem">
            <template v-if="currentItem">
                <Table bordered hover striped small>
                    <TBody>
                    <Tr v-for="row in Object.keys(currentItem).filter(i=>!excludeFromView.includes(i))">
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
    <Card body-class="p-0">
        <template #header>
            <Row>
                <Col :md="2" :sm="12" :lg="2">
                    <Select v-model="perPage" :options="pager" size="sm"/>
                </Col>
                <Col class="text-center" :sm="12" :md="6">
                    <Spinner v-if="loading"/>
                    <Input v-else type="search" :placeholder="searchPlaceholder" :size="searchSize"/>
                </Col>
                <Col :sm="12" :md="4" class="text-md-end text-sm-start">
                    <ButtonGroup size="sm">
                        <Button variant="primary">
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
        <CardTitle class="p-2 m-0">
            {{ title }}
        </CardTitle>
        <Table v-bind="getTableProps" v-if="hackReRendered">
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
            <Tr v-for="(item,item_key) in items" :key="item_key">
                <template v-for="(node,node_key) in theCols">
                    <RenderColumnVNode
                        :class="node.props.tdClass||node.props['td-class']"
                        v-if="node.props.visible!==false"
                        :item="item"
                        :node="node"
                    />
                </template>
            </Tr>
            </TBody>
        </Table>
    </Card>
</template>

<script lang="ts">
import axios from "axios";

import {computed, defineComponent, onMounted, PropType, provide, ref, VNode} from "vue";
import {TBody, Th, Td, Tr, THead, Table, CardTitle, Card} from "./../index"
import Column from "./Column.vue";
import RenderColumnVNode from "./RenderColumnVNode";
import Spinner from "./Spinner.vue";
import Row from "./Row";
import Col from "./Col";
import Select from "./Select.vue";
import Button from "./Button";
import {Plus, Trash} from "@wovosoft/wovoui-icons";
import ButtonGroup from "./ButtonGroup";
import Input from "./Input.vue";
import tableProps from "../shared/tableProps";

import type {buttonSizes} from "../types/buttonSizes";
import type {ColorVariants} from "../types/colorVariants";
import type {classTypes} from "../types/classTypes";

import Dropdown from "./Dropdown.vue";
import Checkbox from "./Checkbox.vue";
import ListGroupItem from "./ListGroupItem.vue";
import {startCase} from "lodash";
import Modal from "./Modal.vue";
import FormGroup from "./FormGroup.vue";

type FieldType = {
    label: string,
    key: string,
    formatter: CallableFunction | null | undefined
}
export default defineComponent({
    name: "LaravelCrudTable",
    components: {
        FormGroup,
        Modal,
        ListGroupItem,
        Checkbox,
        Dropdown,
        Input,
        ButtonGroup,
        Button,
        Select,
        Col,
        Row,
        Column, TBody, Th, Td, Tr, THead, Table, CardTitle, Card, RenderColumnVNode,
        Spinner,
        Plus,
        Trash
    },
    props: {
        apiUrl: {type: String as PropType<string>, default: null, required: true},
        title: {type: String as PropType<string>, default: null},
        titleTag: {type: String as PropType<keyof HTMLElementTagNameMap>, default: "h4"},
        fields: {type: Array as PropType<string[] | FieldType[] | null>, default: () => ([])},
        pager: {type: Array as PropType<number[]>, default: () => [5, 10, 15, 20, 30, 50, 70, 100, 150, 200, 300, 500]},
        searchPlaceholder: {type: String as PropType<string>, default: "Search..."},
        searchSize: {type: String as PropType<buttonSizes>, default: "sm"},
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

        /**
         *  Form Submission Handler Function, when executes the currentItem object will be provided as parameter
         */
        handleFormSubmit: {type: Function as PropType<(item: object) => void>, default: null}
    },
    setup(props, {expose, slots}) {
        const items = ref<object[]>([]);
        const loading = ref<boolean>(false);
        const perPage = ref<number>(15);
        const fetchItems = () => {
            loading.value = true;
            return axios.post(props.apiUrl)
                .then(res => {
                    loading.value = false;
                    items.value = res.data?.data;
                    return res.data?.data;
                })
                .catch(err => {
                    loading.value = false;
                    items.value = [];
                    console.log(err.response.data);
                    return []
                })
        }

        onMounted(() => {
            fetchItems();
        });
        const getTableProps = computed(() => {
            const keys = Object.keys(tableProps);
            let output = {};
            for (let x in props) {
                if (keys.includes(x)) {
                    output[x] = props[x];
                }
            }
            return output;
        });

        /**
         * CRUD Modals
         */
        const showViewModal = ref<boolean>(false);
        const showCreateUpdateModal = ref<boolean>(false);
        const currentItem = ref<object>(null);

        /**
         * Provide controls to child columns to trigger modals
         */
        provide("showViewModal", showViewModal);
        provide("showCreateUpdateModal", showCreateUpdateModal);
        provide("currentItem", currentItem);

        /**
         * Date Format for created_at and updated_at values
         */
        const dateFormat = (date) => {
            if (!date) {
                return null;
            }

            return new Intl.DateTimeFormat(props.dateLocale, props.dateOptions || {}).format(new Date(date));
        }
        return {
            dateFormat,
            startCase,
            currentItem,
            items,
            loading,
            perPage,
            getTableProps,
            theCols: ref<VNode[]>(slots.default()),
            showViewModal,
            showCreateUpdateModal,
            hackReRendered: ref<number>(Math.random() * 1000),
            getLabel(node) {
                return node.props.label || startCase(node.props.field)
            },
            getFormInputLabel(prop) {
                if (Object.keys(props.createUpdateFormFields).includes(prop) && props.createUpdateFormFields[prop].hasOwnProperty('label')) {
                    return props.createUpdateFormFields[prop].label;
                }
                return startCase(prop);
            },
            getComponentName(prop) {
                if (Object.keys(props.createUpdateFormFields).includes(prop) && props.createUpdateFormFields[prop].hasOwnProperty('component')) {
                    return props.createUpdateFormFields[prop].component;
                }
                return Input;
            },
            getAttributeBindings(prop) {
                if (Object.keys(props.createUpdateFormFields).includes(prop) && props.createUpdateFormFields[prop].hasOwnProperty('attrs')) {
                    return props.createUpdateFormFields[prop].attrs;
                }
                return null;
            },

            /**
             * When default form submission handler is not provided, it will be used.
             */
            handleSubmit() {
                if (props.handleFormSubmit) {
                    return props.handleFormSubmit(currentItem.value);
                }
                return axios
                    .put(props.formSubmitUrl, currentItem.value)
                    .then(res => {
                        alert(res.data?.message || "Successfully Done");
                        return res;
                    })
                    .catch(err => {
                        console.log(err.response.data);
                        return err;
                    });
            }
        }
    }
})
</script>