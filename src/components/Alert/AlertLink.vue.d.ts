import { DefineComponent, VNode } from 'vue';
import type { AlertLinkProps } from './index';
import type { EmitFn } from '@/index';

export interface AlertLinkSlots {
    default(): VNode[];
}

export interface AlertLinkEmitOptions {}
export declare type AlertLinkEmits = EmitFn<AlertLinkEmitOptions>;

declare const AlertLink: DefineComponent<AlertLinkProps, AlertLinkSlots, AlertLinkEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        AlertLink: DefineComponent<AlertLinkProps, AlertLinkSlots, AlertLinkEmits>;
    }
}

export default AlertLink;
