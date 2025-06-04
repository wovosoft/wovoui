import { DefineComponent, VNode } from 'vue';
import type { CollapseProps, CollapseEmits } from './index';
import type { EmitFn } from '@/index';

export interface CollapseSlots {
    default(): VNode[];
}

export declare type CollapseEmitsType = EmitFn<CollapseEmits>;

declare const Collapse: DefineComponent<CollapseProps, CollapseSlots, CollapseEmitsType>;

declare module 'vue' {
    export interface GlobalComponents {
        Collapse: DefineComponent<CollapseProps, CollapseSlots, CollapseEmitsType>;
    }
}

export default Collapse;
