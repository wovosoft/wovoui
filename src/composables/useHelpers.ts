/**
 * @link https://github.com/chartjs/Chart.js/blob/master/src/helpers/helpers.core.ts#L15-L21
 */
import {computed, ref, useModel} from "vue";

export const uid = (() => {
    let id = 0;
    return () => id++;
})();

/**
 * This method is used to apply multiple modals in same page.
 * NOTE: each time it is called count value is increased
 */
export const modalCount = ((status): ((increase: boolean | null) => number) => {
    let count = 0;
    //@ts-ignore
    return (increase = status): number => {
        if (increase === true) {
            return ++count;
        }
        if (increase === false) {
            return --count;
        }
        return count;
    };
})();


//doesn't work with array splice
export function useStateModel<T extends Record<string, any>, K extends keyof T>(props: T, name: K, options?: {
    local?: boolean;
}) {
    const model = useModel(props, name, options);
    const state = ref<typeof model.value>(model.value);

    return computed({
        get: () => model.value || state.value,
        set: (value) => {
            model.value = value;
            state.value = value;
        }
    })
}