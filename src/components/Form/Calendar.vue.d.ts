import { DefineComponent } from 'vue';
import type { EmitFn } from '@/index';

export interface CalendarProps {
    modelValue?: string | number | Date | object | null | undefined;
    format?: string;
    weekdayType?: string;
    monthSelectorEnabled?: boolean;
    activeClass?: string;
}

export interface CalendarSlots {}
export interface CalendarEmitOptions {
    'update:modelValue': [value: string];
}
export declare type CalendarEmits = EmitFn<CalendarEmitOptions>;

declare const Calendar: DefineComponent<CalendarProps, CalendarSlots, CalendarEmits>;

declare module 'vue' {
    export interface GlobalComponents {
        Calendar: DefineComponent<CalendarProps, CalendarSlots, CalendarEmits>;
    }
}

export default Calendar;
