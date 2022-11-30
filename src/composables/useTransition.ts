export const OFFCANVAS_TRANSITION_DURATION = 300;   //0.3s

/**
 * Exported from Bootstrap 5.5.2
 * onTransitionEnd event can be used. But when there are multiple transitions,
 * there might have some issues. So, using this approach is better.
 * @param  element
 * @link https://github.com/twbs/bootstrap/blob/main/js/src/util/index.js#L47-L68
 */
export const getTransitionDurationFromElement = (element: HTMLElement) => {
    if (!element) {
        return 0;
    } // Get transition-duration of the element


    let {
        transitionDuration,
        transitionDelay
    } = window.getComputedStyle(element);

    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

    if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
    }


    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * 1000;
};