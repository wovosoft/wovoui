import { DefineComponent } from 'vue';
import { CardImgPropsInterface } from './index';
import type { EmitFn } from '@/index';

export interface CardImgSlots {}

export interface CardImgEmitOptions {}
export declare type CardImgEmits = EmitFn<CardImgEmitOptions>;

declare const CardImg: DefineComponent<CardImgPropsInterface, CardImgSlots, CardImgEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        CardImg: DefineComponent<CardImgPropsInterface, CardImgSlots, CardImgEmits>;
    }
}

export default CardImg;
