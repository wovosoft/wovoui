import {onBeforeUnmount, onMounted, ref, watch, unref, Ref} from "vue";
import {createPopper, Instance as PopperInstance} from "@popperjs/core";
import {unrefElement} from "@vueuse/core";
import type {OptionsGeneric} from "@popperjs/core/lib/types";

declare type SetAction<S> = S | ((prev: S) => S);

export default function (reference, target, options, shouldUpdate: Ref<boolean>) {
    const popper = ref<PopperInstance>(null);

    const initialOptions = {
        placement: "bottom-start",
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 5],
                },
            },
        ],
    };

    onMounted(() => {
        popper.value = createPopper(
            unrefElement(reference),
            unrefElement(target),
            Object.assign({}, initialOptions, unref(options))
        );
    });

    const update = () => popper.value?.update();
    const destroy = () => {
        popper.value?.destroy();
        popper.value = undefined;
    };
    const setOptions = (options) => {
        popper.value?.setOptions(options).then(() => {
            popper.value.update();
        });
    }

    onBeforeUnmount(destroy);
    watch(
        options,
        (value: SetAction<Partial<OptionsGeneric<any>>>) => {
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