import {onBeforeUnmount, onMounted, ref, type Ref, unref, watch} from "vue";
import {createPopper, type Instance as PopperInstance, type VirtualElement} from "@popperjs/core";
import type {PopperOptionsType} from "@/index";

const unrefElement = (ref: any): Element | null => {
    const el = unref(ref);
    return el?.$el ?? el;
};
export default function (reference: any, target: any, options: Ref<PopperOptionsType>, shouldUpdate: Ref<boolean>) {
    const popper = ref<PopperInstance>();

    const initialOptions: PopperOptionsType = {
        placement: "bottom-start",
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 2],
                },
            },
        ],
    };

    onMounted(() => {
        popper.value = createPopper(
            unrefElement(reference) as (Element | VirtualElement),
            unrefElement(target) as HTMLElement,
            Object.assign({}, initialOptions, unref(options))
        );
    });

    const update = () => popper.value?.update();
    const destroy = () => {
        popper.value?.destroy();
        popper.value = undefined;
    };
    const setOptions = (options: PopperOptionsType) => {
        popper.value?.setOptions(options).then(() => {
            popper.value?.update();
        });
    }

    onBeforeUnmount(destroy);
    watch(
        options,
        (value: PopperOptionsType) => {
            popper.value?.setOptions(value);
        },
        {immediate: true}
    );
    watch(shouldUpdate, update);

    return {
        popper,
        update,
        destroy,
        setOptions
    };
}