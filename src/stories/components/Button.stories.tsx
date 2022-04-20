import {Meta} from "@storybook/vue3";
import Button from "../../components/Button";
import {omit} from "lodash";
import type {ColorVariants} from "../../types/colorVariants";

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        content: {
            control: 'text',
            description: 'Slot content'
        },
        variant: {
            description: "Button Color Variants",
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            control: {type: 'select'}
        },
        size: {
            description: "Button Size",
            options: [null, "sm", "lg"],
            control: {type: "select"}
        },
        outline: {
            description: "Button Outline Prop",
            control: {type: "boolean"}
        },
        block: {
            description: "Defines Block Level Button",
            control: {type: "boolean"}
        },
        pill: {
            description: "Defines Pill Button",
            control: {type: "boolean"}
        },
        squared: {
            description: "Defines Squared Button",
            control: {type: "boolean"}
        },
        disabled: {
            description: "Defines Button's Disabled State",
            control: {type: "boolean"}
        },
        badge: {
            control: {type: 'text'},
            description: 'Button Badge'
        },
        badgeVariant: {
            description: "Button Badge's Color Variants",
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            control: {type: 'select'}
        },
    },
} as Meta;

const Template = (args) => ({
    components: {Button},
    setup() {
        return {
            args: omit(args, ['content']),
            content: args.content
        };
    },
    template: `
        <Button v-bind="args">{{ content }}</Button>`
});

/**
 * Variant Property
 */
export const Variant = Template.bind({});
Variant.storyName = "Variants"
Variant.args = {
    content: "Button",
    variant: "primary" as ColorVariants
}
Variant.parameters = {
    controls: {
        include: ['content', 'variant'],
        sort: 'alpha'
    }
};

/**
 * Size Property
 */
export const Size = Template.bind({});
Size.storyName = "Sizes";
Size.args = {
    content: "Button",
    size: null
}
Size.parameters = {
    controls: {
        include: ['content', 'size'],
        sort: 'alpha'
    }
};

/**
 * Outline
 */
export const Outline = Template.bind({});
Outline.args = {
    content: "Button",
    size: null,
    variant: 'primary'
}
Outline.parameters = {
    controls: {
        include: ['content', 'variant', 'outline', 'size'],
        sort: 'alpha'
    }
};

/**
 * Block
 */
export const Block = Template.bind({});
Block.args = {
    content: "Button",
    block: true,
    variant: "primary"
}
Block.parameters = {
    controls: {
        include: ['content', 'variant', 'block'],
        sort: 'alpha'
    }
};

/**
 * Pill
 */
export const Pill = Template.bind({});
Pill.args = {
    content: "Button",
    pill: true,
    variant: "primary"
}
Pill.parameters = {
    controls: {
        include: ['content', 'variant', 'pill'],
        sort: 'alpha'
    }
};
/**
 * Squared
 */
export const Squared = Template.bind({});
Squared.args = {
    content: "Button",
    squared: true,
    variant: "primary"
}
Squared.parameters = {
    controls: {
        include: ['content', 'variant', 'squared'],
        sort: 'alpha'
    }
};

/**
 * Squared
 */
export const Disabled = Template.bind({});
Disabled.args = {
    content: "Button",
    disabled: true,
    variant: "primary"
}
Disabled.parameters = {
    controls: {
        include: ['content', 'variant', 'disabled'],
        sort: 'alpha'
    }
};

/**
 * Badge Property
 */
export const Badge = Template.bind({});
Badge.args = {
    content: "Button",
    variant: "primary",
    badgeVariant: "dark",
    badge: "14"
}
Badge.parameters = {
    controls: {
        include: ['content', 'variant', 'badge', 'badgeVariant'],
        sort: 'alpha'
    }
};

/**
 * Default Button
 */
export const Default = Template.bind({});
Default.args = {
    content: "Default Button",
}




