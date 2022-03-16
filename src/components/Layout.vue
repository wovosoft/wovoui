<template>
    <div class="layout">
        <OffCanvas
            :header="sidebarHeader"
            btn-close-white
            v-model="sidebar"
            :header-class="['text-light','bg-dark']">
            <slot name="sidebar-left"></slot>
        </OffCanvas>
        <header class="menu position-fixed top-0 end-0 start-0" :style="{zIndex:navbarZIndex}">
            <slot name="header"
                  :sidebar="sidebar"
                  :toggleSidebar="toggleSidebar">
            </slot>
        </header>
        <Container tag="section" style="margin-top: 58px;" fluid>
            <Row>
                <Col tag="aside"
                     v-if="!sidebar"
                     :md="3"
                     :lg="2"
                     class="d-sm-block d-none bg-light start-0 top-0 overflow-auto bottom-0 p-0 position-fixed wui-sidebar"
                     :style="{maxWidth:leftSidebarWidth,zIndex: navbarZIndex-1}">
                    <slot name="sidebar-left"></slot>
                </Col>
                <Col tag="main" role="main" :md="9" :lg="10" class="ms-sm-auto px-md-4">
                    <slot></slot>
                </Col>
            </Row>
        </Container>
    </div>
</template>

<script lang="ts">
import Row from "./Row";
import Col from "./Col";
import Container from "./Container";
import OffCanvas from "./OffCanvas.vue";
import {defineComponent, PropType, ref} from "vue";

export default defineComponent({
    name: "Layout",
    components: {Container, Col, Row, OffCanvas},
    props: {
        sidebarHeader: {type: String as PropType<string>, default: null},
        height: {type: String as PropType<string>, default: "100vh"},
        leftSidebarWidth: {type: String as PropType<string>, default: "300px"},
        navbarZIndex: {type: Number as PropType<number>, default: 100}
    },
    setup(props) {
        const sidebar = ref(false);
        const toggleSidebar = () => sidebar.value = !sidebar.value;
        return {
            sidebar,
            toggleSidebar
        }
    }
})
</script>
<style lang="scss">
.wui-sidebar {
    margin-top: 55px !important;
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1) !important;
    max-height: calc(100vh - 55px) !important;
}
</style>
