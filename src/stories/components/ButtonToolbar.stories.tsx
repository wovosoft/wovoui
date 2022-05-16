import {Meta} from "@storybook/vue3";
import ButtonToolbar from "../../components/ButtonToolbar";
import Button from "../../components/Button";
import ButtonGroup from "../../components/ButtonGroup";

export default {
    title: "Components/Button Toolbar",
    component: ButtonToolbar
} as Meta

const Template = (args) => ({
    components: {ButtonToolbar,ButtonGroup, Button},
    setup() {
        return {
            args
        };
    },
    template: `
        <div style="position: relative;">
        <ButtonToolbar key-nav aria-label="Toolbar with button groups">
            <ButtonGroup class="mx-1">
                <Button>&laquo;</Button>
                <Button>&lsaquo;</Button>
            </ButtonGroup>
            <ButtonGroup class="mx-1">
                <Button>Edit</Button>
                <Button>Undo</Button>
                <Button>Redo</Button>
            </ButtonGroup>
            <ButtonGroup class="mx-1">
                <Button>&rsaquo;</Button>
                <Button>&raquo;</Button>
            </ButtonGroup>
        </ButtonToolbar>
        </div>`,
    args: {
        ariaLabel: "Button Group"
    },
});

export const Default = Template.bind({});
Default.args = {}