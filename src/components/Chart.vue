<template>
    <canvas ref="root" width="400" height="400"></canvas>
</template>

<script lang="ts">
import {ref, onMounted, defineComponent, PropType} from 'vue'
import Chart, {ChartData, ChartOptions, ChartType, DefaultDataPoint} from 'chart.js/auto';

export default defineComponent({
    props: {
        type: {type: String as PropType<ChartType>, default: "bar"},
        data: {type: Object as PropType<ChartData<ChartType, DefaultDataPoint<ChartType>, unknown>>, default: null},
        options: {type: Object as PropType<ChartOptions>, default: null},
    },
    setup(props) {
        const root = ref(null)
        const chart = ref(null);
        onMounted(() => {
            chart.value = new Chart(root.value.getContext("2d"), {
                type: props.type,
                data: props.data,
                options: props.options
            });
        })

        return {
            root
        }
    },

})
</script>