<template>
  <h2>Collapse</h2>
  <Button @click="shown=!shown">
    Manual Toggle : {{ shown }}
  </Button>
  <Collapse toggle-text="Toggle Collapse" v-model="shown">
    <Card>
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
      Some placeholder content for the collapse component.
      This panel is hidden by default but revealed when the user activates the relevant trigger.
    </Card>
  </Collapse>
</template>

<script>
import Collapse from "../components/Collapse.vue";
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";

export default {
  name: "DemoCollapse",
  components: {Button, Card, Collapse},
  data() {
    return {
      shown: false
    }
  }
}
</script>