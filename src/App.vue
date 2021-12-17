<template>
    <Navbar id="the_navbar" variant="dark" type="dark" style="background: #7952b3 !important;">
        <template #brand>
            <span style="font-style: italic;letter-spacing: 2px">wovoui</span>
        </template>
        <Collapse id="navbarSupportedContent" is-nav>
            <NavbarNav class="me-auto mb-2 mb-lg-0">
                <NavItem :to="{name:'Index'}">
                    Docs
                </NavItem>
                <NavItem @click="sidebar=!sidebar" class="d-sm-none d-block">
                    Components
                </NavItem>
            </NavbarNav>
            <NavbarNav>
                <NavItem target="_blank" href="https://wovosoft.com">
                    wovosoft
                </NavItem>
                <NavItem target="_blank" href="mailto: wovosoft@gmail.com">
                    <Icon icon="envelope"/>
                </NavItem>
                <NavItem target="_blank" href="https://github.com/wovosoft/wovoui">
                    <Icon icon="github"/>
                </NavItem>
            </NavbarNav>
        </Collapse>
    </Navbar>
    <OffCanvas
        :header-class="['text-light']"
        header-style="background:rgb(121, 82, 179) !important;"
        v-model="sidebar"
        header="wovoui">
        <ListGroup>
            <ListGroupItem
                @click="sidebar=false"
                exact-active-class="active"
                v-for="(r,rk) in $router.getRoutes()"
                :to="{name:r.name}"
                :key="rk">
                {{ r.name }}
            </ListGroupItem>
        </ListGroup>
    </OffCanvas>
    <Container :fluid="true" :style="{height:height}">
        <Row :style="{height:height}">
            <Col style="max-width: 300px;padding-top: 5px;" class="d-sm-block d-none">
                <ListGroup>
                    <ListGroupItem
                        exact-active-class="active"
                        v-for="(r,rk) in $router.getRoutes()"
                        :to="{name:r.name}"
                        :key="rk">
                        {{ r.name }}
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
import Collapse from "./components/Collapse.vue";
import NavbarNav from "./components/NavbarNav.vue";
import NavItem from "./components/NavItem.vue";
import Icon from "./components/Icon.vue";
import OffCanvas from "./components/OffCanvas.vue";
import {ref} from "vue";

export default {
    components: {
        OffCanvas,
        Icon,
        Navbar, ListGroupItem, ListGroup, Col, Container, Row,
        Collapse, NavbarNav, NavItem
    },
    setup(props) {
        return {
            sidebar: ref(false),
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

#the_navbar.navbar-dark .navbar-nav .nav-link {
    color: white !important;
}

/*.list-group-item a {*/
/*    text-decoration: none;*/
/*}*/
</style>