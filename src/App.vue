<script setup>
import DemoButtons from "./demos/DemoButtons.vue";
import DemoBadge from "./demos/DemoBadge.vue";
import DemoAlerts from "./demos/DemoAlerts.vue"
import DemoListGroup from "./demos/DemoListGroup.vue"
import DemoCard from "./demos/DemoCard.vue"
import DemoForms from "./demos/DemoForms.vue";
import Container from "./components/Container.vue";
import Row from "./components/Row.vue";
import Col from "./components/Col.vue";
import DemoDropdowns from "./demos/DemoDropdowns.vue";
import DemoAccordions from "./demos/DemoAccordions.vue";
import DemoCollapse from "./demos/DemoCollapse.vue";
import DemoBreadcrumb from "./demos/DemoBreadcrumb.vue";
import DemoNavs from "./demos/DemoNavs.vue";
import DemoNavbar from "./demos/DemoNavbar.vue";
import DemoOffCanvas from "./demos/DemoOffCanvas.vue";
import DemoPopover from "./demos/DemoPopover.vue";
</script>

<template>
    <Container class="mb-5">
        <Row>
            <Col>
                <DemoButtons/>
                <hr/>
                <DemoBadge/>
                <hr/>
                <DemoAlerts/>
                <hr/>
                <DemoListGroup/>
                <hr/>
                <DemoCard/>
                <hr/>
                <DemoForms/>
            </Col>
        </Row>
    </Container>
    <h2 class="text-center">Layout Grid</h2>
    <Container class="layout">
        <Row>
            <Col>Default</Col>
            <Col>Default</Col>
            <Col>Default</Col>
        </Row>
        <Row>
            <Col :col="6">col=6</Col>
            <Col :col="6">col=6</Col>
        </Row>
        <Row>
            <Col :sm="12" :md="6">
                :sm="12" :md="6"
            </Col>
            <Col :sm="12" :md="6">
                :sm="12" :md="6"
            </Col>
        </Row>
        <Row>
            <Col sm>
                sm
            </Col>
            <Col sm>
                sm
            </Col>
        </Row>
    </Container>

    <DemoDropdowns/>
    <Container style="margin-bottom: 150px">
        <DemoAccordions/>
        <br>
        <DemoCollapse/>
        <br>
        <DemoBreadcrumb/>
        <br>
        <DemoNavs/>
    </Container>
    <br>
    <DemoNavbar/>
    <DemoOffCanvas/>
    <DemoPopover/>
</template>

<style>
.layout [class^='col'] {
    background: darkslategray;
    border: 1px solid white;
    padding: 10px;
    color: white;
    text-align: center;
}
</style>