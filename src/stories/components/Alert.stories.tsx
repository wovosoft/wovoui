import Alert from "../../components/Alert.vue";
import {Meta} from "@storybook/vue3";
import {omit} from "lodash";
import colors from "../helpers/colors";


export default {
    title: "Components/Alert",
    component: Alert,
    argTypes: {
        variant: {
            options: colors,
            control: {type: 'select'}
        },
        dismissible: {
            control: {type: 'boolean'}
        },
        show: {
            control: {type: 'boolean'}
        },
        fade: {
            control: {type: 'boolean'}
        },
        dismissLabel: {
            control: {type: 'text'}
        },
        countdownStep: {
            control: {type: 'number'}
        }
    }
} as Meta;

const Template = (args) => ({
    components: {Alert},
    setup() {
        return {
            args: omit(args, ['content']),
            content: args.content
        };
    },
    template: `
        <Alert v-bind="args">{{ content }}</Alert>`
});

export const Default = Template.bind({});
Default.args = {
    content: "This is Default Alert",
    show: true,
    tag: "div",
    variant: "primary",
    dismissible: true,
    fade: true,
    dismissLabel: "Dismiss",
    countdownStep: 3
}
export const Dismissible = Template.bind({});
Dismissible.args = {
    content: "Dismissible Alert",
    dismissible: true,
    show: true
}
Dismissible.parameters = {
    controls: {
        include: ['content', 'dismissible', 'show']
    }
}

export const Variant = Template.bind({});
Variant.args = {
    content: "Contextual Variants",
    variant: "primary",
    show: true,
}
Variant.parameters = {
    controls: {
        include: ["content", "show", "variant"]
    }
}