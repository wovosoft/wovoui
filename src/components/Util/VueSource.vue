<template>
    <div>
        <h4>{{ label }}</h4>
        <VCodeBlock
            :code="sourceCode"
            highlightjs
            :lang="lang"
            theme="neon-bunny"
        />
    </div>
</template>

<script lang="ts">
import {ref, onMounted, defineComponent, PropType} from 'vue';
import {VCodeBlock} from "@wdns/vue-code-block";

export default defineComponent({
    components: {VCodeBlock},
    props: {
        label: String as PropType<string>,
        lang: {
            type: String as PropType<string>,
            default: 'html'
        },
        path: {
            type: String as PropType<string>,
            required: true
        }
    },
    setup(props) {
        const exampleComponent = ref(null);

        const exampleRawComponent = ref(null);
        const sourceCode = ref<string>('');

        // Dynamically import the example component and set it to the ref
        const importExampleComponent = async () => {
            const moduleRaw = await import(/* @vite-ignore */props.path+`?raw`);
            exampleRawComponent.value = moduleRaw.default;

            getSourceCode();
        };

        // Get source code of the example component
        const getSourceCode = () => {
            if (exampleRawComponent.value) {
                sourceCode.value = exampleRawComponent.value.toString();
            }
        };

        onMounted(importExampleComponent);

        return {exampleComponent: exampleRawComponent, sourceCode};
    }
})
</script>
