<template>
    <Container>
        <h2>Tabs</h2>
        <Tabs v-model="model">
            <Tab :title="'Tab '+ (x)" :active="x===1" v-for="x in 10">
                <h4>Tab {{ x }}</h4>
                This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle
                the visibility of this one for the next. The tab JavaScript swaps classes to control the content
                visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
            </Tab>
        </Tabs>
        <h2>Card Tabs</h2>
        <Tabs v-model="model" card>
            <Tab :title="'Tab '+ (x)" :active="x===1" v-for="x in 10">
                <CardText>
                    <h4>Tab {{ x }}</h4>
                    This is some placeholder content the Profile tab's associated content. Clicking another tab will
                    toggle
                    the visibility of this one for the next. The tab JavaScript swaps classes to control the content
                    visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                </CardText>
            </Tab>
        </Tabs>
        <h2>Card Tabs Pills</h2>
        <Tabs v-model="model" pills card>
            <Tab :title="'Tab '+ (x)" :active="x===1" v-for="x in 10">
                <CardText>
                    <h4>Tab {{ x }}</h4>
                    This is some placeholder content the Profile tab's associated content. Clicking another tab will
                    toggle
                    the visibility of this one for the next. The tab JavaScript swaps classes to control the content
                    visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                </CardText>
            </Tab>
        </Tabs>
        <h2>Tabs End</h2>
        <Tabs v-model="model" end>
            <Tab :title="'Tab '+ (x)" :active="x===1" v-for="x in 10">
                <CardText>
                    <h4>Tab {{ x }}</h4>
                    This is some placeholder content the Profile tab's associated content. Clicking another tab will
                    toggle
                    the visibility of this one for the next. The tab JavaScript swaps classes to control the content
                    visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                </CardText>
            </Tab>
        </Tabs>
        <h2>Tabs Vertical</h2>
        <Tabs v-model="model" vertical>
            <Tab :title="'Tab '+ (x)" :active="x===1" v-for="x in 4">
                <CardText>
                    <h4>Tab {{ x }}</h4>
                    This is some placeholder content the Profile tab's associated content. Clicking another tab will
                    toggle
                    the visibility of this one for the next. The tab JavaScript swaps classes to control the content
                    visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                </CardText>
            </Tab>
        </Tabs>
    </Container>
</template>

<script>
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";
import Container from "../components/Container.vue";
import {ref} from "vue";
import Input from "../components/Input.vue";
import Button from "../components/Button.vue";
import CardText from "../components/CardText.vue";

export default {
    name: "DemoTabs",
    components: {CardText, Button, Input, Container, Tab, Tabs},
    setup(props) {
        const model = ref(0);
        const hide2 = ref(false);
        return {
            hide2,
            model,
        }
    }
}
</script>