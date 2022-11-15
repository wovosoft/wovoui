<template>
    <div class="mt-5">
        <FormGroup label="Select Date">
            <Datepicker
                format="DD-MM-YYYY"
                size="sm"
                v-model="currentDate"
            />
        </FormGroup>
        {{ currentDate }}
    </div>
</template>

<script lang="ts" setup>
import {Datepicker} from "../../src";
import FormGroup from "../../src/components/Form/FormGroup.vue";
import {ref} from "vue";

const currentDate = ref()

const items = new Array(10).fill({}).map((e, i) => {
    return {
        idx: i,
        name: 'Name - ' + i
    }
});

const fields = [
    {key: 'idx'},
    {key: 'name'}
];
</script>
