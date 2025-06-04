import { DefineComponent, VNode } from 'vue';
import type { DropdownItemProps } from './index';
import type { EmitFn } from '@/index';

export interface DropdownItemSlots {
    default(): VNode[];
}

export interface DropdownItemEmitOptions {}
export declare type DropdownItemEmits = EmitFn<DropdownItemEmitOptions>;

declare const DropdownItem: DefineComponent<DropdownItemProps, DropdownItemSlots, DropdownItemEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        DropdownItem: DefineComponent<DropdownItemProps, DropdownItemSlots, DropdownItemEmits>;
    }
}

export default DropdownItem;
