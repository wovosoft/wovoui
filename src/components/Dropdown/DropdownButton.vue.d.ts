import { DefineComponent, VNode } from 'vue';
import type { DropdownButtonPropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface DropdownButtonSlots {
    default(): VNode[];
}

export interface DropdownButtonEmitOptions {}
export declare type DropdownButtonEmits = EmitFn<DropdownButtonEmitOptions>;

declare const DropdownButton: DefineComponent<DropdownButtonPropsInterface, DropdownButtonSlots, DropdownButtonEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        DropdownButton: DefineComponent<DropdownButtonPropsInterface, DropdownButtonSlots, DropdownButtonEmits>;
    }
}

export default DropdownButton;
