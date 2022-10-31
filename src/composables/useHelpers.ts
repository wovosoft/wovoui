/**
 * @link https://github.com/chartjs/Chart.js/blob/master/src/helpers/helpers.core.ts#L15-L21
 */

export const uid = (() => {
    let id = 0;
    return () => id++;
})();