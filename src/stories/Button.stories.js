import Button from "./../components/Button.vue";

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        // onClick: {},
        size: {
            control: {type: 'select'},
            options: ['sm', 'md', 'lg'],
        },
        variant: {
            control: {type: 'select'},
            options: ['primary', 'secondary', 'success', 'info', 'danger', 'dark', 'warning', 'link', 'light']
        },
        outline: {
            control: {type: 'radio'},
            options: [true, false]
        },
        block: {
            control: {type: 'radio'},
            options: [true, false]
        }
    },
};

const Template = (args) => ({
    components: {Button},
    setup() {
        let props = {};
        Object.keys(args).forEach(i => {
            if (!['label'].includes(i)) {
                props[i] = args[i];
            }
        })
        return {props, args};
    },
    template: `
        <Button v-bind="props">${args.label}</Button>`,
});

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    label: 'Secondary Button',
};

export const Small = Template.bind({});
Small.args = {
    variant: 'danger',
    size: "sm",
    label: 'Small Button',
};

export const Outline = Template.bind({});
Outline.args = {
    variant: 'primary',
    label: 'Primary Button',
    outline: true
};

export const Block = Template.bind({});
Block.args = {
    variant: 'primary',
    label: 'Primary Button',
    block: true,
    pill: false,

};
