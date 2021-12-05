<template>
    <h2>Data Table</h2>
    <TheDatatable :fields="fields1">

    </TheDatatable>
</template>

<script>
import TheDatatable from "./../../components/DataTable.vue"
import {reactive} from "vue";

export default {
    name: "DataTable",
    components: {
        TheDatatable
    },
    setup(props) {
        const fields1 = reactive([
            "One",
            "Two",
            "three"
        ]);
        return {
            fields1
        }
    }
}
</script>
