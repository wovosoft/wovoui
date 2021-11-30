export const variant = {
    type: String,
    default: 'primary'
}
export const visible = {
    type: Boolean,
    default: false
}
export const shown = {
    type: Boolean,
    default: false
}
export const boolTrue = {
    type: Boolean,
    default: true
}
export const boolFalse = {
    type: Boolean,
    default: false
}
export const stringNull = {
    type: String,
    default: null
}
export const nullableSize = {
    type: String,
    default: null
}
export const makeString = (initial = null) => ({
    type: String,
    default: initial
});
export const makeBoolean = (initial = true) => ({
    type: Boolean,
    default: initial
});
export const makeNumber = (initial = 0) => ({
    type: Number,
    default: initial
});
export const make = (type, initial) => ({
    type,
    default: () => initial
})
export const required = {
    type: Boolean,
    default: true
}
export const readonly = {
    type: Boolean,
    default: true
}
export const getEntity = (props, option, type = "valueField") => {
    if (typeof props[type] === "string") {
        return option[props[type]];
    } else if (typeof props[type] === "function") {
        return props[type](option);
    }
    return option;
}
export const isBoolean = (val) => typeof val === "boolean";