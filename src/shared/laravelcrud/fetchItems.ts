import axios, {AxiosStatic} from "axios";
import {Ref} from "vue";

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

export default function (loading: Ref<boolean>, url: string, items: Ref<LaravelDatatableType>, axiosPromise: AxiosStatic = axios, props: any = {}) {
    loading.value = true;
    return axiosPromise.post(url, {
        page: items.value.current_page || 1,
        per_page: items.value.per_page || 15,
        filter: null,
        ...(props.withQuery ? props.withQuery : {})
    }).then(res => {
        loading.value = false;
        items.value = res.data;
        return res.data?.data;
    }).catch(err => {
        loading.value = false;
        items.value = JSON.parse(JSON.stringify(defaultDatatable));
        console.log(err.response?.data);
        return []
    })
}