import {DefineComponent, VNode} from 'vue';
import {AlertLinkProps} from './index';

export interface ComponentSlots {
    default(): VNode[];
}

export interface ComponentEmitOptions {
}

export declare type ComponentEmits = (event: keyof ComponentEmitOptions, ...args: ComponentEmitOptions[keyof ComponentEmitOptions]) => void;

declare const AlertLink: DefineComponent<AlertLinkProps, ComponentSlots, ComponentEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AlertLink: DefineComponent<AlertLinkProps, ComponentSlots, ComponentEmits>;
    }
}

export default AlertLink;
