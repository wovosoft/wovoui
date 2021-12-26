<template>
    <h1>Rating</h1>
    <p>
        <code>&lt;Rating&gt;</code> is a custom rating component, built with Bootstrap's icon classes. Internally
        it uses <code>&lt;Icon&gt;</code> component.
    </p>
    <Rating v-model="rating" class="border p-1"/>
    <br>
    <Input type="number" v-model="rating"/>
    <Highlight
        code='<template>
    <Rating v-model="rating" class="border p-1"/>
    <br>
    <Input type="number" v-model="rating"/>
</template>
<script>
import {ref} from "vue";
import Rating from "../../components/Rating.vue";
import Input from "../../components/Input.vue";
export default {
    components: {Rating,Input},
    setup(props) {
        return {
            rating: ref(2)
        }
    }
}
</script>'/>

    <h2>Variant and color</h2>
    <p>
        Easily apply one of the Bootstrap theme color variants to the rating icon via the <code>variant</code> prop.
        The default is to use the default form control text color.
    </p>
    <div>
        <Rating v-model="rating2" variant="warning" class="mb-1 border p-2"></Rating>
        <Rating v-model="rating2" variant="success" class="mb-1 border p-2"></Rating>
        <Rating v-model="rating2" variant="danger" class="mb-1 border p-2"></Rating>
        <Rating v-model="rating2" variant="primary" class="mb-1 border p-2"></Rating>
        <Rating v-model="rating2" variant="info" class="mb-1 border p-2"></Rating>
        <p class="mt-2">Value: {{ rating2 }}</p>
    </div>
    <Highlight code='<template>
    <div>
        <Rating v-model="rating" variant="warning" class="mb-1 border p-2"></Rating>
        <Rating v-model="rating" variant="success" class="mb-1 border p-2"></Rating>
        <Rating v-model="rating" variant="danger" class="mb-1 border p-2"></Rating>
        <Rating v-model="rating" variant="primary" class="mb-1 border p-2"></Rating>
        <Rating v-model="rating" variant="info" class="mb-1 border p-2"></Rating>
        <p class="mt-2">Value: {{ rating }}</p>
    </div>
</template>
<script>
export default {
    name: "FormRating",
    components: {Input, Rating},
    setup(props) {
        return {
            rating: ref(2),
        }
    }
}
</script>'/>
</template>

<script>
import Rating from "../../components/Rating.vue";
import {ref} from "vue";
import Input from "../../components/Input.vue";
import Highlight from "../../components/Highlight.ts";

export default {
    name: "FormRating",
    components: {Highlight, Input, Rating},
    setup(props) {
        return {
            rating: ref(2),
            rating2:ref(2)
        }
    }
}
</script>