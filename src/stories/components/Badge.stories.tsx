import {Meta} from "@storybook/vue3"
import Badge from "../../components/Badge";
import {omit} from "lodash";
import colors from "../helpers/colors";

export default {
    title: "Components/Badge",
    component: Badge,
    argTypes: {
        variant: {
            options: colors,
            control: {type: 'select'}
        },
        position: {
            options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
            control: {type: 'select'}
        },
        pill: {
            control: {type: 'boolean'}
        }
    }
} as Meta

const Template = (args) => ({
    components: {Badge},
    setup() {
        return {
            args: omit(args, ['content']),
            content: args.content
        };
    },
    template: `
        <button class="btn btn-primary"> This is button containing badge
        <Badge v-bind="args">{{ content }}</Badge>
        </button>`
});

export const Variant = Template.bind({})
Variant.args = {
    content: "14",
    variant: 'dark'
}
Variant.parameters = {
    controls: {
        include: ['content', 'variant']
    }
}
const PositionTemplate = (args) => ({
    components: {Badge},
    setup() {
        return {
            args: omit(args, ['content']),
            content: args.content
        };
    },
    template: `
        <button class="btn btn-primary position-relative"> This is button containing badge
        <Badge v-bind="args">{{ content }}</Badge>
        </button>`
});
export const Position = PositionTemplate.bind({});
Position.args = {
    content: "14",
    variant: 'dark',
    position: 'top-right'
};
Position.parameters = {
    controls: {
        include: ['content', 'position']
    }
}
export const Pill = Template.bind({});
Pill.args = {
    pill: true,
    content: '15',
    variant: 'danger'
};
Pill.parameters = {
    controls: {
        include: ['content', 'pill']
    }
}