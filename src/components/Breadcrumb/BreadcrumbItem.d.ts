import {DefineComponent, VNode} from 'vue';
import {BreadcrumbItemProps} from './index';

export interface ComponentSlots {
    default(): VNode[];
}

export interface ComponentEmitOptions {}

export declare type ComponentEmits = (event: keyof ComponentEmitOptions, ...args: ComponentEmitOptions[keyof ComponentEmitOptions]) => void;

declare const BreadcrumbItem: DefineComponent<BreadcrumbItemProps, ComponentSlots, ComponentEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        BreadcrumbItem: DefineComponent<BreadcrumbItemProps, ComponentSlots, ComponentEmits>;
    }
}

export default BreadcrumbItem;
