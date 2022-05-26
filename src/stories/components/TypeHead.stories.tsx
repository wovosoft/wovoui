import {Meta} from "@storybook/vue3";
import TypeHead from "../../components/TypeHead.vue";

export default {
    title: "Components/TypeHead",
    component: TypeHead
} as Meta
const getItems = (items, query) => {
    let o = [];
    for (let x = 1; x <= 50; x++) {
        o.push({
            text: "Text " + x,
            value: "Value " + x
        })
    }
    items.value = o
};
const Template = (args) => ({
    components: {TypeHead},
    setup() {
        return {
            args,
            getItems
        };
    },
    template: `
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <TypeHead
            :get-items="getItems"
            :get-label="item=>item?.text||'Not Selected'"
            :get-option="option=>option?.text"
        />
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    `,
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
