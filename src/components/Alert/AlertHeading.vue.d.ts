import { DefineComponent, VNode } from 'vue';
import type { AlertHeadingProps } from './index';
import type { EmitFn } from '@/index';

export interface AlertHeadingSlots {
    default(): VNode[];
}

export interface AlertHeadingEmitOptions {}
export declare type AlertHeadingEmits = EmitFn<AlertHeadingEmitOptions>;

declare const AlertHeading: DefineComponent<AlertHeadingProps, AlertHeadingSlots, AlertHeadingEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AlertHeading: DefineComponent<AlertHeadingProps, AlertHeadingSlots, AlertHeadingEmits>;
    }
}

export default AlertHeading;
