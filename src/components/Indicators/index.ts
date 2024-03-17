import {HasColorVariant, HasTag} from "@/components";
import type {ButtonSizes} from "@/index";

export {default as Progress} from "./Progress.vue";
export {default as ProgressBar} from "./ProgressBar.vue";
export {default as Spinner} from "./Spinner.vue";

export interface ProgressProps extends ProgressBarProps {
    barTag?: keyof HTMLElementTagNameMap;
    height?: string | number;
}

export interface ProgressBarProps extends HasTag, HasColorVariant {
    value?: number;
    min?: number;
    max?: number;
    showValue?: boolean;
    striped?: boolean;
    animated?: boolean;
}

export interface SpinnerProps extends HasTag, HasColorVariant {
    grow?: boolean;
    size?: ButtonSizes;
}