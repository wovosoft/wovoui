<template>
    <div>
        <canvas :height="height" :width="width" ref="root" role="img"></canvas>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType, ref, watch} from 'vue'
import Chart, {ChartData, ChartItem, ChartOptions, ChartType, DefaultDataPoint} from 'chart.js/auto/auto.js';

type updateModes = 'active' | 'hide' | 'reset' | 'resize' | 'show' | undefined | 'none';
export default defineComponent({
    props: {
        type: {type: String as PropType<ChartType>, default: "bar"},
        data: {type: Object as PropType<ChartData<ChartType, DefaultDataPoint<ChartType>>>, default: null},
        options: {type: Object as PropType<ChartOptions>, default: null},
        height: {
            type: Number as PropType<number | undefined>
        },
        width: {
            type: Number as PropType<number | undefined>
        },
    },
    setup(props, {expose}) {
        const root = ref<ChartItem>();

        const chart = ref<Chart | null>();
        const init = (): Chart => {
            return new Chart((root.value as ChartItem), {
                type: props.type,
                data: props.data,
                options: props.options
            });
        };

        onMounted(() => {
            //@ts-ignore
            chart.value = init();
        });

        const destroy = () => chart.value?.destroy();
        const update = (mode?: updateModes) => chart.value?.update(mode);
        const reset = () => chart.value?.reset();
        const stop = () => chart.value?.stop();
        const resize = (width?: number, height?: number) => chart.value?.resize(width, height)
        const clear = () => chart.value?.clear();
        const toBase64Image = (type?: string, quality?: number) => chart.value?.toBase64Image(type, quality);
        const getDatasetMeta = (index: number) => chart.value?.getDatasetMeta(index);
        const hide = (datasetIndex: number, dataIndex?: number) => chart.value?.hide(datasetIndex, dataIndex);
        const show = (datasetIndex: number, dataIndex?: number) => chart.value?.hide(datasetIndex, dataIndex);
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

        watch(() => props.type, () => {
            chart.value?.destroy();
            chart.value = init();
        });
        watch(() => props.data, () => update());
        watch(() => props.options, () => update());

        return {
            root
        }
    },

})
</script>