import {Meta} from "@storybook/vue3"
import Badge from "../../components/Badge";
import {omit} from "lodash";

export default {
    title: "Components/Badge",
    component: Badge,
    argTypes: {}
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
        <Badge v-bind="args">{{ content }}</Badge>`
});

export const Variant = Template.bind({})
Variant.args = {
    content: "Badge Content"
}