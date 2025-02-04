import {DefineComponent, VNode} from 'vue';
import {BreadcrumbProps} from './index';

export interface ComponentSlots {
    default(): VNode[];
}

export interface ComponentEmitOptions {}

export declare type ComponentEmits = (event: keyof ComponentEmitOptions, ...args: ComponentEmitOptions[keyof ComponentEmitOptions]) => void;

declare const Breadcrumb: DefineComponent<BreadcrumbProps, ComponentSlots, ComponentEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Breadcrumb: DefineComponent<BreadcrumbProps, ComponentSlots, ComponentEmits>;
    }
}

export default Breadcrumb;
