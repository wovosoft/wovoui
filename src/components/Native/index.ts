//native components
import type {ClassType} from "@/components";
import {type StyleValue} from "vue";

export {default as NativeCollapse} from "./NativeCollapse.vue";
export {default as NativeDialog} from "./NativeDialog.vue";

export interface NativeCollapseInterface {
    summary?: string,
    details?: string,
    detailsClass?: ClassType,
    summaryClass?: ClassType,
    detailsStyle?: StyleValue,
    summaryStyle?: StyleValue
}