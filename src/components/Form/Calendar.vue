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
					        :class="{'btn-dark text-white':isToday(d)}"
					        :active-class="activeClass"
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

<script lang="ts">
import {computed, defineComponent, Ref, ref, watch} from "vue";
import dayjs, {Dayjs, ManipulateType, UnitType} from "dayjs";
import isToday from "dayjs/plugin/isToday";
import localData from "dayjs/plugin/localeData";
import Row from "../Layout/Row.vue";
import Col from "../Layout/Col.vue";
import Button from "../Button/Button.vue";
import InputGroup from "./InputGroup.vue";
import {ChevronDoubleLeft, ChevronDoubleRight, ChevronLeft, ChevronRight, CircleFill} from "@wovosoft/wovoui-icons";
import {makeBoolean, makeProp, makeString} from "@/composables";

dayjs.extend(localData);
dayjs.extend(isToday);

type DateType = string | number | Date | Dayjs | null | undefined;

export default defineComponent({
	name: "Calendar",
	components: {
		InputGroup,
		ChevronDoubleLeft,
		ChevronDoubleRight,
		CircleFill,
		ChevronRight,
		ChevronLeft,
		Button,
		Col,
		Row
	},
	props: {
		modelValue: makeProp<DateType>(null, [String, Object]),
		//output format: https://day.js.org/docs/en/display/format#docsNav
		format: makeString("YYYY-MM-DD"),
		//https://day.js.org/docs/en/plugin/locale-data#docsNav
		/**
		 * Week Days can be 'min','short','regular'(full name)
		 */
		weekdayType: makeString("short"),
		monthSelectorEnabled: makeBoolean(true),
		//https://day.js.org/docs/en/get-set/day
		// startOfWeek: makeNumber(1),
		activeClass: makeString("active")
	},
	setup(props, context) {
		const theDate: Ref<Dayjs> = ref(props.modelValue ? dayjs(props.modelValue) : dayjs());
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
				const weeks = <any>[];
				let weekday = theDate.value.startOf('month').day();
				for (let date = 1; date <= theDate.value.daysInMonth(); date++) {
					if (weekday === 0 || weeks.length === 0) {
						weeks.push([]);
					}
					weeks[weeks.length - 1].push(date);
					weekday = (weekday + 1) % 7;
				}
				return weeks.filter((w: any[]) => !!w.length).map((w: any) => w);
			});
		
		return {
			theDate,
			theWeeks,
			setMonth(e: Event & { target: HTMLInputElement }) {
				const date = dayjs(e.target.value);
				theDate.value = dayjs(theDate.value)
					.set('year', date.year())
					.set('month', date.month())
			},
			showMonthSelector: ref(false),
			add: (type: ManipulateType, value = 1) => theDate.value = dayjs(theDate.value).add(value, type),
			subtract: (type: ManipulateType, value = 1) => theDate.value = dayjs(theDate.value).subtract(value, type),
			setToday: () => {
				theDate.value = dayjs();
				context.emit('update:modelValue', theDate.value.format(props.format));
			},
			selectDate(day: UnitType) {
				theDate.value = dayjs(theDate.value).set('date', Number(day));
				//only when clicked, emit modelValue
				context.emit('update:modelValue', theDate.value.format(props.format));
			},
			isToday: (day: number) => dayjs(theDate.value.format('YYYY-MM') + '-' + day).isToday(),
			isSameDay(day: string) {
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
})
</script>
