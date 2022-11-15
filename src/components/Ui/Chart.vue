<template>
    <div>
        <canvas :height="height" :width="width" ref="root" width="400" height="400" role="img"></canvas>
    </div>
</template>

<script lang="ts">
import {ref, onMounted, defineComponent, PropType, Ref, watch} from 'vue'
import Chart, {ChartData, ChartOptions, ChartType, DefaultDataPoint} from 'chart.js/auto';

type updateModes = 'active' | 'hide' | 'reset' | 'resize' | 'show' | undefined | 'none';
export default defineComponent({
    props: {
        type: {type: String as PropType<ChartType>, default: "bar"},
        data: {type: Object as PropType<ChartData<ChartType, DefaultDataPoint<ChartType>, unknown>>, default: null},
        options: {type: Object as PropType<ChartOptions>, default: null},
        height: {type: Number as PropType<number>, default: null},
        width: {type: Number as PropType<number>, default: null},
    },
    setup(props, {expose}) {
        const root: Ref<HTMLCanvasElement> = ref(null)
        const chart: Ref<Chart> = ref(null);
        const init: Function = (): Chart => {
                return new Chart(root.value, {
                    type: props.type,
                    data: props.data,
                    options: props.options
                });
            }
        ;
        onMounted(() => {
            chart.value = init();
        });

        const destroy = () => chart.value.destroy();
        const update = (mode?: updateModes) => chart.value.update(mode);
        const reset = () => chart.value.reset();
        const stop = () => chart.value.stop();
        const resize = (width?: number, height?: number) => chart.value.resize(width, height)
        const clear = () => chart.value.clear();
        const toBase64Image = (type?: string, quality?: number) => chart.value.toBase64Image(type, quality);
        const getDatasetMeta = (index: number) => chart.value.getDatasetMeta(index);
        const hide = (datasetIndex, dataIndex?) => chart.value.hide(datasetIndex, dataIndex);
        const show = (datasetIndex, dataIndex?) => chart.value.hide(datasetIndex, dataIndex);
        expose({
            destroy,
            update,
            reset,
            render: () => update(),
            stop,
            resize,
            clear,
            toBase64Image,
            getDatasetMeta,
            hide,
            show,
            chart,//for direct access to the instance
        });

        watch(() => props.type, (type) => {
            chart.value.destroy();
            chart.value = init();
        });
        watch(() => props.data, (type) => update());
        watch(() => props.options, (type) => update());

        return {
            root
        }
    },

})
</script>