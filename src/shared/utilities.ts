import startCase from "lodash/startCase";
import {PropType} from "vue";
import {BorderRadius, ColorVariants, Displays} from "@/index";

function toLower(str: string) {
    return str.toLowerCase();
}

export const useBg = () => {
    return {
        prop: {
            type: String as PropType<string>,
            default: null
        },
        variant: (value: ColorVariants) => "bg-" + value
    }
}
export const useOpacity = () => {
    return {
        prop: {
            type: [String, Number] as PropType<number | string>,
            default: null
        },
        variant: (value: number | string) => "bg-opacity-" + value
    }
}
export const useText = () => {
    return {
        prop: {
            type: String as PropType<ColorVariants | null>,
            default: null
        },
        variant: (value: ColorVariants) => "text-" + value
    }
}
export const useBorder = () => {
    return {
        prop: {
            type: [String, Number] as PropType<BorderRadius>,
            default: null
        },
        variant: (value: BorderRadius) => "border" + (value ? ("-" + value) : "")
    }
}
export const useRounded = () => {
    return {
        prop: {
            type: [String, Number],
            default: null
        },
        variant: (value: '0' | 'circle') => "rounded" + (value ? ("-" + value) : "")
    }
}
export const useDisplay = () => {
    return {
        prop: {
            type: String as PropType<Displays>,
            default: null
        },
        variant: (value: Displays) => "d-" + value
    }
}
export const collapseTransitionEnd = (e: Event & { target: HTMLElement }, showing: boolean, dim: 'height' | 'width' = "height", /*shouldRenderHandler*/) => {
    e.target.classList.remove("collapsing");
    e.target.classList.add("collapse")
    if (showing) {
        e.target.classList.add("show");
    } else {
        e.target.classList.remove("show");
        // shouldRenderHandler(showing);
    }
    e.target.style[dim] = "";
}
export const toggleCollapse = (container: HTMLElement, shown: boolean, dim: 'height' | 'width' = "height", /*shouldRenderHandler*/) => {
    // shouldRenderHandler(true);
    container.style.height = "auto"
    let dimension = container[dim === "height" ? "clientHeight" : "clientWidth"] + "px"

    if (shown) {
        container.classList.add('collapsing')
        container.style[dim] = "0px"
        setTimeout(() => container.style[dim] = dimension, 0)
    } else {
        container.style[dim] = dimension;
        container.classList.add('collapsing')
        setTimeout(() => container.style[dim] = "0px", 0);
    }
}
export const isObject = (obj: any): boolean => typeof obj === "object" && !Array.isArray(obj);
export const isArray = (arr: any): boolean => Array.isArray(arr);
export const title = (str: string): string => startCase(toLower(str));

export function orderBy(items: Record<string, any>[], key: string) {
    return items.sort((a: Record<string, any>, b: Record<string, any>) => a[key].localeCompare(b[key]));
}