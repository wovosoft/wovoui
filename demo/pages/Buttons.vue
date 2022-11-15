<template>
    <div>
        <h3>Default Buttons</h3>
        <Button>Default Button</Button>

        <h3 class="my-3">Color Variants</h3>
        <Button v-for="c in colors" :variant="c" class="me-3">{{ c }}</Button>

        <h3 class="my-3">Outline Colors</h3>
        <Button v-for="c in colors" outline :variant="c" class="me-3">{{ c }}</Button>

        <h3 class="my-3">Sizes</h3>
        <Button v-for="size in sizesOf('button')" class="me-3" :size="size">
            Button {{ size }}
        </Button>

        <h3 class="my-3">Disabled Button</h3>
        <Button disabled>Disabled</Button>
        <Button disabled class="mx-3" variant="primary">Disabled</Button>
        <Button disabled variant="warning">Disabled</Button>
        <h3>Active Button</h3>
        <Button size="sm" active >Active</Button>

        <ButtonClose white>Test</ButtonClose>
    </div>
</template>

<script lang="ts" setup>
import { Button } from "./../../src/index";
// import {NavLink} from "./../../dist";

import {colors, sizesOf} from "../assets";
import ButtonClose from "../../src/components/Button/ButtonClose";
</script>
