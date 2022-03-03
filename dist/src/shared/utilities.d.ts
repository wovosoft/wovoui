export function useBg(): {
    prop: {
        type: StringConstructor;
        default: any;
    };
    variant: (value: any) => string;
};
export function useOpacity(): {
    prop: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    variant: (value: any) => string;
};
export function useText(): {
    prop: {
        type: StringConstructor;
        default: any;
    };
    variant: (value: any) => string;
};
export function useBorder(): {
    prop: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    variant: (value: any) => string;
};
export function useRounded(): {
    prop: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
    };
    variant: (value: any) => string;
};
export function useDisplay(): {
    prop: {
        type: StringConstructor;
        default: any;
    };
    variant: (value: any) => string;
};
export function collapseTransitionEnd(e: any, showing: any, dim?: string): void;
export function toggleCollapse(container: any, shown: any, dim?: string): void;
export function isObject(obj: any): boolean;
export function isArray(arr: any): boolean;
export function title(str: any): string;
//# sourceMappingURL=utilities.d.ts.map