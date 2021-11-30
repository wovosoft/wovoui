<template>
    <Container class="my-5" style="margin-bottom: 100px;">
        <h2>Popover Demo</h2>
        <template v-for="p in placements">
            <Button :id="'popover'+p" class="m-4">
                Popover {{p}}
            </Button>
            <Popover :target="'popover'+p" :placement="p">
                <template #header>This is Header {{ 'popover' + p }}</template>
                This is Body {{ 'popover' + p }}
            </Popover>
        </template>
    </Container>
</template>

<script>
import Button from "../components/Button.vue";
import Popover from "../components/Popover.vue";
import Container from "../components/Container.vue";

export default {
    name: "DemoPopover",
    components: {Container, Popover, Button},
    data() {
        return {
            placements: [
                'auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end',
                'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start',
                'right-end', 'left', 'left-start', 'left-end'
            ]
        }
    }
}
</script>