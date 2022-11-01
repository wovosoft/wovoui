/**
 * @link https://github.com/chartjs/Chart.js/blob/master/src/helpers/helpers.core.ts#L15-L21
 */

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
