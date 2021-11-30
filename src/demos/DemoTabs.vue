<template>
    <Container>
        <h2>Tabs</h2>
        <Tabs id="the_tabs">
            <Tab title="Tab 1" active>
                Create a widget of tabbable panes of local content. The tabs component is built upon navs and cards
                internally, and provides full keyboard navigation control of the tabs.
            </Tab>
            <Tab title="Tab 2">
                Create a widget of tabbable panes of local content. The tabs component is built upon navs and cards
                internally, and provides full keyboard navigation control of the tabs.
            </Tab>
            <Tab title="Tab 3">
                Create a widget of tabbable panes of local content. The tabs component is built upon navs and cards
                internally, and provides full keyboard navigation control of the tabs.
            </Tab>
            <Tab title="Tab 4">
                Create a widget of tabbable panes of local content. The tabs component is built upon navs and cards
                internally, and provides full keyboard navigation control of the tabs.
            </Tab>
        </Tabs>
    </Container>
</template>

<script>
import Tabs from "../components/Tabs.vue";
import Tab from "../components/Tab.vue";
import Container from "../components/Container.vue";

export default {
    name: "DemoTabs",
    components: {Container, Tab, Tabs}
}
</script>