import {computed, onMounted, provide, reactive, ref, VNode} from "vue";
import fetchItems from "./fetchItems";
import tableProps from "../tableProps";
import laravelCrudHandleDestroy from "./handleDestroy";
import {startCase} from "lodash";

import laravelCrudHandleSubmit from "./handleSubmit";
import type {LaravelDatatableType} from "../../types/LaravelDatatableType";

let defaultDatatable: LaravelDatatableType = {
    current_page: 1,
    data: [],
    first_page_url: null,
    from: 1,
    last_page: 1,
    last_page_url: null,
    links: [],
    next_page_url: null,
    path: null,
    per_page: 15,
    prev_page_url: null,
    to: 1,
    total: 0
};
export default function setup(props, {expose, slots}) {
    const items = ref<LaravelDatatableType>(defaultDatatable);

    const loading = ref<boolean>(false);
    const hackReRendered = ref<number>(Math.random() * 1000);
    const perPage = ref<number>(15);

    onMounted(() => fetchItems(loading, props.apiUrl, items));


    /**
     * CRUD Modals
     */
    const showViewModal = ref<boolean>(false);
    const showCreateUpdateModal = ref<boolean>(false);

    const processDelete = (item) => {
        if (confirm("Are You Sure?")) {
            laravelCrudHandleDestroy(item, props).then(res => {
                alert(res.data?.message || "Successfully Done");
                fetchItems(loading, props.apiUrl, items);
            }).catch(err => {
                alert(err.response.data?.message || "Operation Failed");
                console.log(err.response);
            });
        }
    };
    const currentItem = ref<object>(null);

    /**
     * Provide controls to child columns to trigger modals
     */
    provide("showViewModal", showViewModal);
    provide("showCreateUpdateModal", showCreateUpdateModal);
    provide("processDelete", processDelete);
    provide("currentItem", currentItem);

    /**
     * Date Format for created_at and updated_at values
     */
    const dateFormat = (date) => date ? new Intl.DateTimeFormat(
        props.dateLocale,
        props.dateOptions || {}
    ).format(new Date(date)) : null;

    return {
        fetchItems: () => fetchItems(loading, props.apiUrl, items),
        dateFormat,
        startCase,
        currentItem,
        items,
        loading,
        perPage,
        getTableProps: computed(() => {
            const keys = Object.keys(tableProps);
            let output = {};
            for (let x in props) {
                if (keys.includes(x)) {
                    output[x] = props[x];
                }
            }
            return output;
        }),
        theCols: computed<VNode[]>(() => slots.default()),
        showViewModal,
        showCreateUpdateModal,
        hackReRendered,
        getLabel: (node) => node.props.label || startCase(node.props.field),
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
            return "Input";
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
        handleSubmit: () => laravelCrudHandleSubmit(props, currentItem).then(res => {
            alert(res.data?.message || "Successfully Done");
            fetchItems(loading, props.apiUrl, items);
        }).catch(err => {
            alert(err.response?.data?.message || "Operation Failed");
            console.log(err.response)
        }),
        initAddForm: () => {
            showCreateUpdateModal.value = true;
            currentItem.value = props.defaultFormObject;
        }
    }
}