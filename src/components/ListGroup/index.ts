import {HasColorVariant, HasTag, ResponsiveSizes} from "@/index";

import type {RouteLocationRaw} from "vue-router";
import {AnchorHTMLAttributes} from "vue";

export {default as ListGroup} from "./ListGroup.vue";
export {default as ListGroupItem} from "./ListGroupItem.vue";

export interface ListGroupProps extends HasTag {
    flush?: boolean;
    numbered?: boolean;
    horizontal?: boolean | ResponsiveSizes;
}

export interface ListGroupItemProps extends HasTag, HasColorVariant {
    active?: boolean;
    disabled?: boolean;
    href?: AnchorHTMLAttributes['href'];
    to?: RouteLocationRaw;
    button?: boolean;
}