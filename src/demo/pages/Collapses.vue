<template>
    <h3>Default </h3>
    <Button @click="showDefault=!showDefault">Toggle</Button>
    <Collapse v-model="showDefault">
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>

    </Collapse>

    <h3>Horizontal </h3>
    <Button @click="$refs.collapse?.toggle()">Toggle</Button>
    <Collapse visible class="at dd d" at dd d horizontal ref="collapse" width="1000">
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
        wovoui is an impmentation of Bootstrap 5 components in vue 3.
        It is developed by Narayan Adhikary at wovosoft<br>
    </Collapse>
    <div>Next Block</div>
</template>

<script lang="ts" setup>

import Collapse from "../../components/Accordion/Collapse.vue";
import {ref} from "vue";
import {Button} from "@/components";

const showDefault = ref(false);
const showHorizontal = ref(true);
</script>
