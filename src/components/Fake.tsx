import {defineComponent} from "vue";
import Button from "./Button.vue";

export default defineComponent({
    name: "Fake",
    components: {Button},
    setup(props, context) {
        return () => (
            <Button>
                Hello
            </Button>
        )
    }
})

