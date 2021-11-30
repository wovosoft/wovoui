<script setup>
import Button from "../components/Button.vue";
import ButtonGroup from "../components/ButtonGroup.vue";
import ButtonToolbar from "../components/ButtonToolbar.vue";
</script>

<template>
    <h2>Buttons</h2>
    <Button squared variant="primary">
        Squared Button
    </Button>
    <Button variant="primary" outline>
        Squared Button
    </Button>
    <Button disabled variant="primary">
        Disabled Button
    </Button>
    <Button pressed variant="primary">
        Pressed Button
    </Button>
    <Button badge="100" variant="primary" badge-variant="danger">
        Badge Button
    </Button>

    <br>


    <h2>Button Group</h2>
    <ButtonGroup>
        <Button variant="primary">
            Squared Button
        </Button>
        <Button variant="primary" outline>
            Squared Button
        </Button>
        <Button disabled variant="primary">
            Disabled Button
        </Button>
        <Button pressed variant="primary">
            Pressed Button
        </Button>
    </ButtonGroup>
    <br>
    <h2>Small Button Group</h2>
    <ButtonGroup size="sm">
        <Button variant="primary">
            Squared Button
        </Button>
        <Button variant="primary" outline>
            Squared Button
        </Button>
        <Button disabled variant="primary">
            Disabled Button
        </Button>
        <Button pressed variant="primary">
            Pressed Button
        </Button>
    </ButtonGroup>
    <h2>Vertical Button Group</h2>
    <ButtonGroup vertical>
        <Button variant="primary">
            Squared Button
        </Button>
        <Button variant="primary" outline>
            Squared Button
        </Button>
        <Button disabled variant="primary">
            Disabled Button
        </Button>
        <Button pressed variant="primary">
            Pressed Button
        </Button>
    </ButtonGroup>
    <h2>Button Toolbar</h2>
    <ButtonToolbar>
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
        <div class="btn-group" role="group" aria-label="Third group">
            <Button variant="info">8</Button>
        </div>
    </ButtonToolbar>
</template>

