import {computed, onMounted, provide, Ref, ref, VNode} from "vue";

import tableProps from "../tableProps";
import laravelCrudHandleDestroy from "./handleDestroy";
import {startCase} from "lodash";
import type {LaravelDatatableType} from "../../types/LaravelDatatableType";

const laravelCrudHandleSubmit = (props, currentItem: Ref<object>): Promise<any> => {
    if (props.handleFormSubmit) {
        return props.handleFormSubmit(currentItem.value);
    }
    let url: string = "";
    // @ts-ignore
    if (currentItem.value.id && props.formUpdateUrl) {
        url = typeof props.formUpdateUrl === "function" ? props.formUpdateUrl(currentItem.value) : props.formUpdateUrl;
    } else {
        url = props.formSubmitUrl;
    }
    return props.axiosPromise.put(url, currentItem.value);
};


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
export default function setup(props, {slots}) {
    const items = ref<LaravelDatatableType>(defaultDatatable);

    const loading = ref<boolean>(false);
    const hackReRendered = ref<number>(Math.random() * 1000);
    const perPage = ref<number>(15);

    onMounted(() => props.fetchItems(loading, props.apiUrl, items, props.axiosPromise));


    /**
     * CRUD Modals
     */
    const showViewModal = ref<boolean>(false);
    const showCreateUpdateModal = ref<boolean>(false);

    const processDelete = (item) => {
        if (confirm("Are You Sure?")) {
            laravelCrudHandleDestroy(item, props).then(res => {
                alert(res.data?.message || "Successfully Done");
                props.fetchItems(loading, props.apiUrl, items);
            }).catch(err => {
                alert(err.response.data?.message || "Operation Failed");
                console.log(err.response);
            });
        }
    };
    const currentItem = ref<object>(null);
    const setCurrentItem = (item: object | null): void => {
        currentItem.value = item ? JSON.parse(JSON.stringify(item)) : null;
    }
    /**
     * Provide controls to child columns to trigger modals
     */
    provide("showViewModal", showViewModal);
    provide("showCreateUpdateModal", showCreateUpdateModal);
    provide("processDelete", processDelete);
    provide("currentItem", currentItem);
    provide("setCurrentItem", setCurrentItem);

    /**
     * Date Format for created_at and updated_at values
     */
    const dateFormat = (date) => date ? new Intl.DateTimeFormat(
        props.dateLocale,
        props.dateOptions || {}
    ).format(new Date(date)) : null;

    return {
        setCurrentItem,
        getItems: () => props.fetchItems(loading, props.apiUrl, items, props.axiosPromise),
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
            console.log(res.data)
            props.fetchItems(loading, props.apiUrl, items);
        }).catch(err => {
            alert(err.response?.data?.message || "Operation Failed");
            console.log(err.response)
        }),
        initAddForm: () => {
            showCreateUpdateModal.value = true;
            setCurrentItem(props.defaultFormObject)
        }
    }
}