<script setup>
import Button from "../components/Button.vue";
import ButtonGroup from "../components/ButtonGroup.vue";
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
</template>

