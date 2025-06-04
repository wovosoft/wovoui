import { DefineComponent, VNode } from 'vue';
import type { DropdownHeaderProps } from './index';
import type { EmitFn } from '@/index';

export interface DropdownHeaderSlots {
    default(): VNode[];
}

export interface DropdownHeaderEmitOptions {}
export declare type DropdownHeaderEmits = EmitFn<DropdownHeaderEmitOptions>;

declare const DropdownHeader: DefineComponent<DropdownHeaderProps, DropdownHeaderSlots, DropdownHeaderEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        DropdownHeader: DefineComponent<DropdownHeaderProps, DropdownHeaderSlots, DropdownHeaderEmits>;
    }
}

export default DropdownHeader;
