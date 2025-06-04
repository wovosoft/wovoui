import { DefineComponent, VNode } from 'vue';
import type { DropdownGroupPropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface DropdownGroupSlots {
    default(): VNode[];
}

export interface DropdownGroupEmitOptions {}
export declare type DropdownGroupEmits = EmitFn<DropdownGroupEmitOptions>;

declare const DropdownGroup: DefineComponent<DropdownGroupPropsInterface, DropdownGroupSlots, DropdownGroupEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        DropdownGroup: DefineComponent<DropdownGroupPropsInterface, DropdownGroupSlots, DropdownGroupEmits>;
    }
}

export default DropdownGroup;
