<template>
    <DropdownSkeleton
        v-model="isMenuOpened"
        class="datepicker"
        :toggle-class="toggleClass"
        :menu-class="menuClass">
        <template #toggle>
            Toggle
        </template>
        <div>
            <Flex jc="evenly">
                <FlexItem fill @click="adjustCurrentDate(-1,'year')">
                    <Button block outline size="sm" class="border-0">
                        <ChevronDoubleLeft/>
                    </Button>
                </FlexItem>
                <FlexItem fill>
                    <Button block outline size="sm" class="border-0" @click="adjustCurrentDate(-1,'month')">
                        <ChevronLeft/>
                    </Button>
                </FlexItem>
                <FlexItem fill>
                    <Button block outline size="sm" class="border-0" @click="setToday">
                        <CircleFill/>
                    </Button>
                </FlexItem>
                <FlexItem fill>
                    <Button block outline size="sm" class="border-0" @click="adjustCurrentDate(1,'month')">
                        <ChevronRight/>
                    </Button>
                </FlexItem>
                <FlexItem fill>
                    <Button block outline size="sm" class="border-0" @click="adjustCurrentDate(1,'year')">
                        <ChevronDoubleRight/>
                    </Button>
                </FlexItem>
            </Flex>
            <!--class="border rounded-1 mt-1"-->
            <div>
                <header class="text-center fw-bold my-2">
                    {{ currentMonthName }} - {{ currentMonth?.year() }}
                </header>
                <Table borderless small class="mb-0">
                    <thead class="border-bottom">
                    <tr>
                        <th v-for="week in dayNames()" class="text-center">
                            {{ week }}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="week in theWeeks">
                        <td v-for="d in week" class="text-center">
                            <Button
                                @click="selectDate(d)"
                                :class="{'fw-bold':d.inRefMonth}"
                                size="sm"
                                :active="d.isToday"
                                class="rounded-circle border-0"
                                outline>
                                {{ d.day }}
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    </DropdownSkeleton>
</template>

<script lang="ts" setup>
import {computed, onMounted, PropType, ref, watch} from "vue";
import {DateItemInterface, dateMatrix, dayNames} from "../../composables/useDates";
import {Button, Flex, FlexItem, Table} from "../../";
import DropdownSkeleton from "../Internal/DropdownSkeleton.vue";
import type {ButtonSizes} from "../../types";
import dayjs, {Dayjs} from "dayjs";
import {ChevronDoubleLeft, ChevronDoubleRight, ChevronLeft, ChevronRight, CircleFill} from "@wovosoft/wovoui-icons";
import {makeSize, makeString} from "../../composables/useProps";

const props = defineProps({
    size: makeSize<ButtonSizes>(null),
    format: makeString(),
    modelValue: {
        type: [String, Object] as PropType<string | Date | Dayjs>,
        default: null
    }
});


const emit = defineEmits<{
    (e: 'update:modelValue', value: Date | string): void
}>();

const currentMonth = ref<Dayjs>(null);
const isMenuOpened = ref<boolean>(false);

onMounted(() => {
    if (!props.modelValue) {
        currentMonth.value = dayjs();
    } else {
        currentMonth.value = dayjs(props.modelValue);
    }
});

watch(() => props.modelValue, value => {
    currentMonth.value = dayjs(props.modelValue);
});

const theWeeks = computed(() => dateMatrix(currentMonth.value));
const currentMonthName = computed(() => {
    return dayjs.months()[currentMonth.value?.month() || 0];
});

const menuClass = computed(() => [
    "dropdown-menu",
    "border-0",
    "shadow",
    "p-2"
]);
const toggleClass = computed(() => [
    "form-control", {
        ["form-control-" + props.size]: props.size
    }
]);


function adjustCurrentDate(count: number, type: 'year' | 'month' | 'day') {
    currentMonth.value = currentMonth.value.add(count, type);
}

function setToday() {
    currentMonth.value = dayjs();
    selectDate({data: dayjs().toDate()})
}

function selectDate(date: DateItemInterface | { data: Date }) {
    let dayjsDate = dayjs(date.data);
    if (props.format) {
        emit("update:modelValue", dayjsDate.format(props.format));
    } else {
        emit("update:modelValue", date.data);
    }

    isMenuOpened.value = false;
}
</script>