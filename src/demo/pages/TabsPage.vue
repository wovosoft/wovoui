<template>
    <Container class="py-5">
        <SpinButton v-model="tabIndex" :max="4" :min="0"/>
        <Tabs card v-model="tabIndex">
            <Tab v-for="i in 5" :title="'Tab-'+ i">
                This is tab description of Tab-{{ i }}. <br/>
                This is tab description of Tab-{{ i }}. <br/>
                This is tab description of Tab-{{ i }}. <br/>
                This is tab description of Tab-{{ i }}. <br/>
                This is tab description of Tab-{{ i }}. <br/>
            </Tab>
        </Tabs>
    </Container>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import Tabs from "@/components/Tab/Tabs.vue";
import Tab from "@/components/Tab/Tab.vue";
import {Container} from "@/";
import SpinButton from "@/components/Form/SpinButton.vue";

const tabIndex = ref<number>(2);

</script>
