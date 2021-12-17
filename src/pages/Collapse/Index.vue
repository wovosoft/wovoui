<template>
    <h1 class="text-danger text-center">WORKING ON IT</h1>
    <h1>Collapse</h1>
    <p>
        Toggle the visibility of content across your project with a few classes.
    </p>

    <h2>Example</h2>
    <p>
        Click the buttons below to show and hide another element via class changes:
    </p>
    <ul>
        <li><code>.collapse</code> hides content</li>
        <li><code>.collapsing</code> is applied during transitions</li>
        <li><code>.collapse.show</code> shows content</li>
    </ul>
</template>

<script>
import Collapse from "../../components/Collapse.vue";
import Card from "../../components/Card.vue";
import CardText from "../../components/CardText.vue";
import Button from "../../components/Button.vue";

export default {
    name: "CollapseIndex",
    components: {Button, CardText, Card, Collapse},
    setup(props) {
        return {
            collapse1: false,
            collapse2: false
        }
    }
}
</script>