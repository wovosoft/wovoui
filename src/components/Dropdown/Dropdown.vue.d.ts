import { DefineComponent, VNode } from 'vue';
import type { DropdownPropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface DropdownSlots {
    default(): VNode[];
    'button-content'(): VNode[];
}

export interface DropdownEmitOptions {}
export declare type DropdownEmits = EmitFn<DropdownEmitOptions>;

declare const Dropdown: DefineComponent<DropdownPropsInterface, DropdownSlots, DropdownEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Dropdown: DefineComponent<DropdownPropsInterface, DropdownSlots, DropdownEmits>;
    }
}

export default Dropdown;
