<template>
    <div class="wui-calendar border-1 border" role="group">
        <header class="wui-calendar-header p-2 text-center fw-bold">
            <Row>
                <Col>
                    <Button size="sm"
                            tabindex="1"
                            variant="secondary"
                            outline
                            class="border-0"
                            @click="subtract('year')">
                        <ChevronDoubleLeft/>
                    </Button>
                </Col>
                <Col>
                    <Button size="sm"
                            tabindex="2"
                            variant="secondary"
                            outline
                            class="border-0"
                            @click="subtract('month')">
                        <ChevronLeft/>
                    </Button>
                </Col>
                <Col>
                    <Button
                        tabindex="3"
                        size="sm"
                        variant="secondary"
                        outline
                        class="border-0"
                        @click="setToday">
                        <CircleFill/>
                    </Button>
                </Col>
                <Col>
                    <Button size="sm"
                            tabindex="4"
                            variant="secondary"
                            outline
                            class="border-0"
                            @click="add('month')">
                        <ChevronRight/>
                    </Button>
                </Col>
                <Col>
                    <Button size="sm"
                            tabindex="5"
                            variant="secondary"
                            outline
                            class="border-0"
                            @click="add('year')">
                        <ChevronDoubleRight/>
                    </Button>
                </Col>
            </Row>
            <input tabindex="7"
                   :value="theDate.format('YYYY-MM')"
                   type="month"
                   class="border-0 text-center"
                   @input="setMonth"/>
        </header>
        <table class="w-100 border">
            <tr>
                <th v-for="wd in weekdays" class="text-center border">
                    {{ wd }}
                </th>
            </tr>
            <tr v-for="(days,week_index) in theWeeks">
                <template v-if="week_index===0">
                    <td class="text-center border" v-for="pd in (7-days.length)"></td>
                </template>
                <td class="text-center border" v-for="d in days">
                    <Button size="sm"
                            :tabindex="week_index+8"
                            :active="isSameDay(theDate.format('YYYY-MM')+'-'+d)"
                            class="border-0 rounded-circle"
                            outline @click="selectDate(d)">
                        {{ d }}
                    </Button>
                </td>
                <template v-if="week_index===(theWeeks.length-1)">
                    <td class="text-center border" v-for="pd in (7-days.length)"></td>
                </template>
            </tr>
        </table>

    </div>
</template>

<script>
import {computed, ref, watch} from "vue";
import dayjs from "dayjs";
import localData from "dayjs/plugin/localeData";

dayjs.extend(localData);

import Row from "./Row.vue";
import Col from "./Col.vue";
import Button from "./Button.vue";


import {ChevronLeft, ChevronRight, CircleFill, ChevronDoubleRight, ChevronDoubleLeft} from "@wovosoft/wovoui-icons";

import {makeBoolean, makeString} from "../shared/properties.js";
import InputGroup from "./InputGroup.vue";

export default {
    name: "Calendar",
    components: {
        InputGroup,
        ChevronDoubleLeft, ChevronDoubleRight, CircleFill, ChevronRight, ChevronLeft, Button, Col, Row
    },
    props: {
        modelValue: {
            type: [String, Object],
            default: null
        },
        //output format: https://day.js.org/docs/en/display/format#docsNav
        format: {
            type: String,
            default: () => "YYYY-MM-DD"
        },
        //https://day.js.org/docs/en/plugin/locale-data#docsNav
        /**
         * Week Days can be 'min','short','regular'(full name)
         */
        weekdayType: makeString('short'),
        monthSelectorEnabled: makeBoolean(true),
        //https://day.js.org/docs/en/get-set/day
        // startOfWeek: makeNumber(1)
    },
    setup(props, context) {
        const theDate = ref(props.modelValue ? dayjs(props.modelValue) : dayjs());
        watch(() => props.modelValue, () => theDate.value = dayjs(props.modelValue));

        /**
         * Implement later
         * @type {ComputedRef<*[]>}
         */
            // theDate.value = dayjs(theDate.value).day(props.startOfWeek);
            // watch(() => props.startOfWeek, (startDay) => {
            //     theDate.value = dayjs(theDate.value).day(startDay);
            // });


        const theWeeks = computed(() => {
                const weeks = [];
                let weekday = theDate.value.startOf('month').day();
                for (let date = 1; date <= theDate.value.daysInMonth(); date++) {
                    if (weekday === 0 || weeks.length === 0) {
                        weeks.push([]);
                    }
                    weeks[weeks.length - 1].push(date);
                    weekday = (weekday + 1) % 7;
                }
                return weeks.filter((w) => !!w.length).map((w) => w);
            })
        return {
            theDate,
            setMonth(e) {
                const date = dayjs(e.target.value);
                theDate.value = dayjs(theDate.value)
                    .set('year', date.year())
                    .set('month', date.month())
            },
            theWeeks,
            showMonthSelector: ref(false),
            add: (type, value = 1) => theDate.value = dayjs(theDate.value).add(value, type),
            subtract: (type, value = 1) => theDate.value = dayjs(theDate.value).subtract(value, type),
            setToday: () => theDate.value = dayjs(),
            selectDate(day) {
                theDate.value = dayjs(theDate.value).set('date', Number(day));
                //only when clicked, emit modelValue
                context.emit('update:modelValue', theDate.value.format(props.format));
            },
            isSameDay(day) {
                if (!props.modelValue) {
                    return false;
                }
                return dayjs(day).format('YYYY-MM-DD') === dayjs(props.modelValue).format('YYYY-MM-DD');
            },
            weekdays: computed(() => {
                let ld = theDate.value.localeData();
                return props.weekdayType === 'min' ?
                    ld.weekdaysMin() : (props.weekdayType === 'short' ?
                        ld.weekdaysShort() : ld.weekdays());
            })
        }
    }
}
</script>