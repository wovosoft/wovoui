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
    <Button @click="$refs.collapse.toggle()">Toggle</Button>
    <Collapse visible horizontal ref="collapse" width="1000">
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
</template>

<script lang="ts" setup>

import Collapse from "../../src/components/Collapse.js";
import {ref} from "vue";
import Button from "../../src/components/Button";

const showDefault = ref(false);
const showHorizontal = ref(true);
</script>
