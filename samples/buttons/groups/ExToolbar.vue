<template>
    <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup class="me-2" aria-label="First group">
            <Button variant="primary">1</Button>
            <Button variant="primary">2</Button>
            <Button variant="primary">3</Button>
            <Button variant="primary">4</Button>
        </ButtonGroup>
        <ButtonGroup class="me-2" aria-label="Second group">
            <Button variant="secondary">5</Button>
            <Button variant="secondary">6</Button>
            <Button variant="secondary">7</Button>
        </ButtonGroup>
        <ButtonGroup aria-label="Third group">
            <Button variant="info">8</Button>
        </ButtonGroup>
    </ButtonToolbar>
</template>

<script lang="ts" setup>
import {ButtonGroup, Button, ButtonToolbar} from "../../../src";
</script>
