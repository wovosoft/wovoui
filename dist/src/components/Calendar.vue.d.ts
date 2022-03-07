import { PropType } from "vue";
import dayjs from "dayjs";
import { Binary } from "../types/Binary";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string | object>;
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
        type: PropType<Binary>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
}, {
    theDate: import("vue").Ref<{
        clone: () => dayjs.Dayjs;
        isValid: () => boolean;
        year: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        month: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        date: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        day: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        hour: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        minute: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        second: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        millisecond: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        set: (unit: dayjs.UnitType, value: number) => dayjs.Dayjs;
        get: (unit: dayjs.UnitType) => number;
        add: (value: number, unit?: dayjs.ManipulateType) => dayjs.Dayjs;
        subtract: (value: number, unit?: dayjs.ManipulateType) => dayjs.Dayjs;
        startOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        endOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        format: (template?: string) => string;
        diff: (date?: string | number | Date | dayjs.Dayjs, unit?: "d" | "y" | "h" | "s" | "w" | "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year" | "date" | "week" | "quarter" | "M" | "m" | "ms" | "milliseconds" | "seconds" | "minutes" | "hours" | "days" | "months" | "years" | "dates" | "weeks" | "quarters" | "Q", float?: boolean) => number;
        valueOf: () => number;
        unix: () => number;
        daysInMonth: () => number;
        toDate: () => Date;
        toJSON: () => string;
        toISOString: () => string;
        toString: () => string;
        utcOffset: () => number;
        isBefore: (date: string | number | Date | dayjs.Dayjs, unit?: dayjs.OpUnitType) => boolean;
        isSame: (date: string | number | Date | dayjs.Dayjs, unit?: dayjs.OpUnitType) => boolean;
        isAfter: (date: string | number | Date | dayjs.Dayjs, unit?: dayjs.OpUnitType) => boolean;
        locale: {
            (): string;
            (preset: string | ILocale, object?: Partial<ILocale>): dayjs.Dayjs;
        };
        isToday: () => boolean;
        localeData: () => dayjs.InstanceLocaleDataReturn;
    }>;
    theWeeks: import("vue").ComputedRef<any[]>;
    setMonth(e: any): void;
    showMonthSelector: import("vue").Ref<boolean>;
    add: (type: any, value?: number) => dayjs.Dayjs;
    subtract: (type: any, value?: number) => dayjs.Dayjs;
    setToday: () => void;
    selectDate(day: any): void;
    isToday: (day: any) => boolean;
    isSameDay(day: any): boolean;
    weekdays: import("vue").ComputedRef<dayjs.WeekdayNames>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: PropType<string | object>;
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
        type: PropType<Binary>;
        default: boolean;
    };
    activeClass: {
        type: PropType<string>;
        default: string;
    };
}>>, {
    modelValue: string | object;
    activeClass: string;
    format: string;
    weekdayType: string;
    monthSelectorEnabled: Binary;
}>;
export default _default;
//# sourceMappingURL=Calendar.vue.d.ts.map