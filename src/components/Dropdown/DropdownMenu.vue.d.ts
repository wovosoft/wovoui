import { DefineComponent, VNode } from 'vue';
import type { DropdownMenuProps } from './index';
import type { EmitFn } from '@/index';

export interface DropdownMenuSlots {
    default(): VNode[];
}

export interface DropdownMenuEmitOptions {
    opened: [value: boolean];
    closed: [value: boolean];
}
export declare type DropdownMenuEmits = EmitFn<DropdownMenuEmitOptions>;

declare const DropdownMenu: DefineComponent<DropdownMenuProps, DropdownMenuSlots, DropdownMenuEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        DropdownMenu: DefineComponent<DropdownMenuProps, DropdownMenuSlots, DropdownMenuEmits>;
    }
}

export default DropdownMenu;
