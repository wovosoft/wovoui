export namespace variant {
    export const type: StringConstructor;
    const _default: string;
    export { _default as default };
}
export namespace visible {
    const type_1: BooleanConstructor;
    export { type_1 as type };
    const _default_1: boolean;
    export { _default_1 as default };
}
export namespace shown {
    const type_2: BooleanConstructor;
    export { type_2 as type };
    const _default_2: boolean;
    export { _default_2 as default };
}
export namespace boolTrue {
    const type_3: BooleanConstructor;
    export { type_3 as type };
    const _default_3: boolean;
    export { _default_3 as default };
}
export namespace boolFalse {
    const type_4: BooleanConstructor;
    export { type_4 as type };
    const _default_4: boolean;
    export { _default_4 as default };
}
export namespace stringNull {
    const type_5: StringConstructor;
    export { type_5 as type };
    const _default_5: any;
    export { _default_5 as default };
}
export namespace nullableSize {
    const type_6: StringConstructor;
    export { type_6 as type };
    const _default_6: any;
    export { _default_6 as default };
}
export function makeString(initial?: any): {
    type: StringConstructor;
    default: any;
};
export function makeBoolean(initial?: boolean): {
    type: BooleanConstructor;
    default: boolean;
};
export function makeNumber(initial?: number): {
    type: NumberConstructor;
    default: number;
};
export function make(type: any, initial: any): {
    type: any;
    default: () => any;
};
export namespace required {
    const type_7: BooleanConstructor;
    export { type_7 as type };
    const _default_7: boolean;
    export { _default_7 as default };
}
export namespace readonly {
    const type_8: BooleanConstructor;
    export { type_8 as type };
    const _default_8: boolean;
    export { _default_8 as default };
}
export function getEntity(props: any, option: any, type?: string): any;
export function isBoolean(val: any): boolean;
//# sourceMappingURL=properties.d.ts.map