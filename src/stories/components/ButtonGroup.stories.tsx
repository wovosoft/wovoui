import {Meta} from "@storybook/vue3"

import {omit} from "lodash";
import ButtonGroup from "../../components/ButtonGroup";
import Button from "../../components/Button";

export default {
    title: "Components/Button Group",
    component: ButtonGroup,
    subcomponents: {Button},
    argTypes: {
        size: {
            options: [null, 'sm', 'lg'],
            control: {type: 'select'}
        }
    }
} as Meta

const Template = (args) => ({
    components: {ButtonGroup, Button},
    setup() {
        return {
            args
        };
    },
    template: `
        <div style="position: relative;">
        <ButtonGroup v-bind="args">
            <Button variant="primary">Primary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="dark">Dark</Button>
        </ButtonGroup>
        </div>`,
    args: {
        ariaLabel: "Button Group"
    },

});

export const Default = Template.bind({});

export const Size = Template.bind({});
Size.args = {
    size: 'sm'
};
Size.parameters = {
    controls: {
        include: ['size']
    }
}

export const Vertical = Template.bind({});
Vertical.args = {
    vertical: true
}




