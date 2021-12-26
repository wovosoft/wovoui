<template>
    <h1>Form Radio Inputs</h1>
    <div>
        <FormGroup label="Individual radios">
            <Radio v-model="selected" name="some-radios" value="A">Option A</Radio>
            <Radio v-model="selected" name="some-radios" value="B">Option B</Radio>
        </FormGroup>

        <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </div>
    <Highlight code='<template>
    <FormGroup label="Individual radios">
        <Radio v-model="selected" value="A">Option A</Radio>
        <Radio v-model="selected" value="B">Option B</Radio>
    </FormGroup>
</template>
<script>
import FormGroup from "../../components/FormGroup.vue";
import Radio from "../../components/Radio.vue";
import {ref} from "vue";

export default {
    name: "FormRadio",
    components: {Radio, FormGroup},
    setup(props) {
        return {
            selected: ref(&apos;&apos;)
        }
    }
}
</script>'/>
</template>

<script>
import Highlight from "../../components/Highlight.ts";
import FormGroup from "../../components/FormGroup.vue";
import Radio from "../../components/Radio.vue";
import {ref} from "vue";

export default {
    name: "FormRadio",
    components: {Radio, FormGroup, Highlight},
    setup(props) {
        return {
            selected: ref('')
        }
    }
}
</script>