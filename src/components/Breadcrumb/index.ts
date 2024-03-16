import {HasTag} from "@/components";
import {AnchorHTMLAttributes} from "vue";

export {default as BreadcrumbItem} from "./BreadcrumbItem.vue";
export {default as Breadcrumb} from "./Breadcrumb.vue";

export interface BreadcrumbProps extends HasTag {
    items?: any[];
    divider?: string;
}

export interface BreadcrumbItemProps extends HasTag {
    active?: boolean;
    activeClass?: string;
    append?: boolean;
    ariaCurrent?: string;
    disabled?: boolean;
    exact?: boolean;
    rel?: string;
    replace?: boolean;
    target?: AnchorHTMLAttributes['target']
    to?: string | Record<string, any>;
    href?: string;
}