/**
 * @link https://github.com/chartjs/Chart.js/blob/master/src/helpers/helpers.core.ts#L15-L21
 */
import {computed, onBeforeUnmount, ref, useModel} from "vue";

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

export const MAX_UID = 1_000_000
export const MILLISECONDS_MULTIPLIER = 1000
export const TRANSITION_END = 'transitionend'

/**
 * @link https://github.com/twbs/bootstrap/blob/bb10c996d42610489534ccf532428419d447d3da/js/src/util/index.js#L47
 * @param element
 */
export const getTransitionDurationFromElement = (element: Element): number => {
    if (!element) {
        return 0
    }

    // Get transition-duration of the element
    let {transitionDuration, transitionDelay} = window.getComputedStyle(element)

    const floatTransitionDuration = Number.parseFloat(transitionDuration)
    const floatTransitionDelay = Number.parseFloat(transitionDelay)

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0]
    transitionDelay = transitionDelay.split(',')[0]

    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER
}

export const triggerTransitionEnd = (element: Element) => {
    element.dispatchEvent(new Event(TRANSITION_END))
}

/**
 * @link https://github.com/twbs/bootstrap/blob/d9baa2f3a9707e00c6773f637a9df7b3d1795aad/js/src/util/index.js#L167
 * @link https://www.harrytheo.com/blog/2021/02/restart-a-css-animation-with-javascript/
 * @param element
 */
//@ts-ignore
export const reflow = (element: Element | HTMLElement) => element.offsetHeight

export const PADDING_DURATION = 5;

export const executeAfterTransition = (callback: () => any, transitionElement: Element | HTMLElement, waitForTransition: boolean = true) => {
    if (!waitForTransition) {
        callback();
        return
    }


    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + PADDING_DURATION

    let called = false

    //@ts-ignore
    const handler = ({target}) => {
        if (target !== transitionElement) {
            return
        }

        called = true
        transitionElement.removeEventListener(TRANSITION_END, handler)
        callback();
    }

    transitionElement.addEventListener(TRANSITION_END, handler)
    setTimeout(() => {
        if (!called) {
            triggerTransitionEnd(transitionElement)
        }
    }, emulatedDuration);
};

/**
 * This composable needs improvement to track handlers,
 * for example, in a loop if the same setTimeout is again attached,
 * only that one should be replaced
 */
export function useTimeout() {
    const timers = ref<number[]>([]);

    const run = (handler: TimerHandler, duration: number) => {
        const timer: number = setTimeout(handler, duration);
        timers.value.push(timer);
        return timer;
    };

    const clear = (timer?: number) => {
        if (timer) {
            clearTimeout(timer);
        }
        timers.value.forEach((timer: number) => {
            clearTimeout(timer);
        });
    };

    onBeforeUnmount(() => clear());

    return {
        timers,
        run,
        clear
    }
}