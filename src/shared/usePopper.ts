import {onBeforeUnmount, onMounted, ref, watch, unref, Ref} from "vue";
import {createPopper} from "@popperjs/core";
import {unrefElement} from "@vueuse/core";
import {OptionsGeneric} from "@popperjs/core/lib/types";

const popper = ref(null);
declare type SetAction<S> = S | ((prev: S) => S);
export default function (reference, target, options, shouldUpdate: Ref<boolean>) {
    onMounted(() => {
        popper.value = createPopper(
            unrefElement(reference),
            unrefElement(target),
            unref(options)
        );
    });

    const update = () => popper.value?.update();
    const destroy = () => {
        popper.value?.destroy();
        popper.value = null;
    }

    onBeforeUnmount(destroy);

    watch(options, (value: SetAction<Partial<OptionsGeneric<any>>>) => popper.value?.setOptions(value));
    watch(shouldUpdate, (value) => popper.value?.update());

    return {
        popper,
        update,
        destroy
    };
}