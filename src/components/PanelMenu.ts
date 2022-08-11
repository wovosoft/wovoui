type MenuItem = {
    text: string;
    to?: object;
    href?: string;
    children?: MenuItem[];
    icon?: string;
}

import {ChevronUp, ChevronDown, ChevronRight} from "@wovosoft/wovoui-icons";
import {PropType, ref, watch, defineComponent, h, onBeforeMount} from "vue";
import Icon from "./Icon";

import {Collapse, Button, ListGroup, ListGroupItem} from "../index";
import type {ColorVariants} from "../types/colorVariants";


const PanelMenu = defineComponent({
    emits: ["update:modelValue"],
    props: {
        modelValue: {
            type: Number as PropType<number | null>,
            default: null
        },
        items: {
            type: Array as PropType<MenuItem[]>,
            default: () => ([]),
            required: true
        },
        triggerVariant: {
            type: String as PropType<ColorVariants>,
            default: "dark"
        },
        menuVariant: {
            type: String as PropType<ColorVariants>,
            default: "light"
        },
    },
    setup(props, {emit}) {
        const active = ref<number>(0);

        /**
         * Nested modelValue should be implemented
         * @param index
         */
        // const nested=null;

        function setActive(index: number) {
            active.value = index === active.value ? -1 : index;
            emit("update:modelValue", index);
        }

        watch(() => props.modelValue, value => active.value = value);

        onBeforeMount(() => {
            if (props.modelValue !== null) {
                active.value = props.modelValue
            }
        });

        function collapsibleContent(item, item_index) {
            if (item.children) {
                return h(
                    Collapse,
                    {
                        visible: item_index === active.value
                    },
                    () => [
                        h(PanelMenu, {
                            items: item.children,
                            triggerVariant: props.menuVariant,
                        })
                    ]);
            }
        }

        const itemContent = (item, item_index) => {
            return [
                h(
                    Button,
                    {
                        href: item.href,
                        to: item.to,
                        class: "text-start d-flex",
                        block: true,
                        squared: true,
                        variant: props.triggerVariant,
                        onClick: () => setActive(item_index)
                    },
                    () => [
                        item.icon ? h(Icon, {icon: item.icon}) : h(ChevronRight),
                        h("span", {class: "mx-2 flex-grow-1"}, item.text),
                        item.children ? h(item_index === active.value ? ChevronUp : ChevronDown) : null
                    ]
                ),
                collapsibleContent(item, item_index)
            ];
        };

        const listItems = () => props.items.map((item, item_index) => h(
            ListGroupItem,
            {class: "border-0 p-0 m-0", key: item_index},
            () => itemContent(item, item_index)
        ));

        return () => h(ListGroup, {class: ["rounded-0"]}, listItems);
    }
})

export default PanelMenu;


// <template>
//     <ListGroup class="rounded-0">
//         <ListGroupItem class="border-0 p-0 m-0" :key="item_index" v-for="(item, item_index) in items">
//             <Button :href="item.href" :to="item.to" class="text-start d-flex" block squared :variant="triggerVariant"
//                 @click="setActive(item_index)">
//                 <Icon :icon="item.icon ?? 'chevron-right'" />
//                 <span class="mx-2 flex-grow-1">{{ item.text }}</span>
//                 <template v-if="item.children">
//                     <component :is="item_index === active ? ChevronUp : ChevronDown" />
//                 </template>
//             </Button>
//             <Collapse :visible="item_index === active" v-if="item.children">
//                 <PanelMenu :items="item.children" :trigger-variant="menuVariant" />
//             </Collapse>
//         </ListGroupItem>
//     </ListGroup>
// </template>