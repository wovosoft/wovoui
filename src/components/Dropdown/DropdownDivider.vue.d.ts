import { DefineComponent } from 'vue';
import type { EmitFn } from '@/index';

export interface DropdownDividerSlots {}
export interface DropdownDividerEmitOptions {}
export declare type DropdownDividerEmits = EmitFn<DropdownDividerEmitOptions>;

declare const DropdownDivider: DefineComponent<{}, DropdownDividerSlots, DropdownDividerEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        DropdownDivider: DefineComponent<{}, DropdownDividerSlots, DropdownDividerEmits>;
    }
}

export default DropdownDivider;
