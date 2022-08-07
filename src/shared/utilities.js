import startCase from "lodash/startCase";
import toLower from "lodash/toLower";

export const useBg = () => {
    return {
        prop: {
            type: String,
            default: null
        },
        variant: (value) => "bg-" + value
    }
}
export const useOpacity = () => {
    return {
        prop: {
            type: [String, Number],
            default: null
        },
        variant: (value) => "bg-opacity-" + value
    }
}
export const useText = () => {
    return {
        prop: {
            type: String,
            default: null
        },
        variant: (value) => "text-" + value
    }
}
export const useBorder = () => {
    return {
        prop: {
            type: [String, Number],
            default: null
        },
        variant: (value) => "border" + (value ? ("-" + value) : "")
    }
}
export const useRounded = () => {
    return {
        prop: {
            type: [String, Number],
            default: null
        },
        variant: (value) => "rounded" + (value ? ("-" + value) : "")
    }
}
export const useDisplay = () => {
    return {
        prop: {
            type: String,
            default: null
        },
        variant: (value) => "d-" + value
    }
}
export const collapseTransitionEnd = (e, showing, dim = "height", /*shouldRenderHandler*/) => {
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
export const toggleCollapse = (container, shown, dim = "height", /*shouldRenderHandler*/) => {
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
export const isObject = (obj) => typeof obj === "object" && !Array.isArray(obj);
export const isArray = (arr) => Array.isArray(arr);
export const title = (str) => startCase(toLower(str));