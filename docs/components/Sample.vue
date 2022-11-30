<template>
    <div>
        <div class="ratio ratio-16x9">
            <iframe src="/fuck.html" id="theFrame" ref="theFrame" class="">

            </iframe>
        </div>
        <div style="display: none;" id="content">
            <slot/>
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    mounted() {
        let content = document.getElementById("content");
        let body = this.$refs.theFrame.contentWindow.document.write(content.innerHTML)
    }
})
</script>