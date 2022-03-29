import { PropType, Ref } from "vue";
import dayjs, { Dayjs } from "dayjs";
declare type DateType = string | number | Date | Dayjs | null | undefined;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<DateType>;
        default: any;
    };
    format: {
        type: PropType<string>;
        default: string;
    };
    /**
     * Week Days can be 'min','short','regular'(full name)
     */
    weekdayType: {
        type: PropType<string>;
        default: string;
    };
    monthSelectorEnabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
}, {
    theDate: Ref<dayjs.Dayjs>;
    theWeeks: import("vue").ComputedRef<any[]>;
    setMonth(e: any): void;
    showMonthSelector: Ref<boolean>;
    add: (type: any, value?: number) => dayjs.Dayjs;
    subtract: (type: any, value?: number) => dayjs.Dayjs;
    setToday: () => void;
    selectDate(day: any): void;
    isToday: (day: any) => boolean;
    isSameDay(day: any): boolean;
    weekdays: import("vue").ComputedRef<dayjs.WeekdayNames>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<DateType>;
        default: any;
    };
    format: {
        type: PropType<string>;
        default: string;
    };
    /**
     * Week Days can be 'min','short','regular'(full name)
     */
    weekdayType: {
        type: PropType<string>;
        default: string;
    };
    monthSelectorEnabled: {
        type: PropType<boolean>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
}>>, {
    modelValue: DateType;
    activeClass: string;
    format: string;
    weekdayType: string;
    monthSelectorEnabled: boolean;
}>;
export default _default;
//# sourceMappingURL=Calendar.vue.d.ts.map