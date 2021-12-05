<template>
    <Navbar brand="Wovo UI" variant="dark" type="dark">

    </Navbar>
    <Container :fluid="true" :style="{height:height}">
        <Row :style="{height:height}">
            <Col style="max-width: 300px;padding-top: 5px;">
                <ListGroup>
                    <ListGroupItem
                        v-for="(r,rk) in $router.getRoutes()"
                        :key="rk">
                        <router-link :to="{name:r.name}">
                            {{ r.name }}
                        </router-link>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col :style="{height:height,overflowY:'auto',paddingTop:'5px'}">
                <router-view></router-view>
            </Col>
        </Row>
    </Container>
</template>
<script>
import Container from "./components/Container.vue";
import Row from "./components/Row.vue";
import Col from "./components/Col.vue";
import ListGroup from "./components/ListGroup.vue";
import ListGroupItem from "./components/ListGroupItem.vue";
import Navbar from "./components/Navbar.vue";

export default {
    components: {Navbar, ListGroupItem, ListGroup, Col, Container, Row},
    setup(props) {
        return {
            height: "calc(100vh - 60px)"
        }
    }
}
</script>
<style>
body {
    margin: 0 !important;
    padding: 0 !important;
}
</style>