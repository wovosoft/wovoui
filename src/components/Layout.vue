<template>
    <Container tag="section" fluid class="layout" :style="{height}">
        <header class="menu">
            <slot name="header"></slot>
        </header>
        <Row class="row">
            <Col tag="aside" class="col" :style="{maxWidth:leftSidebarWidth}">
                <slot name="sidebar-left"></slot>
            </Col>
            <Col tag="main">
                <slot></slot>
            </Col>
        </Row>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </Container>
</template>

<script lang="ts">
import Row from "./Row";
import Col from "./Col";
import Container from "./Container";
import {defineComponent, PropType} from "vue";

export default defineComponent({
    name: "Layout",
    components: {Container, Col, Row},
    props: {
        height: {type: String as PropType<string>, default: "100vh"},
        leftSidebarWidth: {type: String as PropType<string>, default: "300px"}
    }
})
</script>
