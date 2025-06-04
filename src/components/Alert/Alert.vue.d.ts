import { DefineComponent, VNode } from 'vue';
import type { AlertProps } from './index';
import type { EmitFn } from '@/index';

export interface AlertSlots {
    default(): VNode[];
    heading(): VNode[];
}

export interface AlertEmitOptions {}
export declare type AlertEmits = EmitFn<AlertEmitOptions>;

declare const Alert: DefineComponent<AlertProps, AlertSlots, AlertEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Alert: DefineComponent<AlertProps, AlertSlots, AlertEmits>;
    }
}

export default Alert;
