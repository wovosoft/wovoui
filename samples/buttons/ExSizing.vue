<template>
    <Row>
        <Col lg="4" class="pb-2">
            <Button size="sm">Small Button</Button>
        </Col>
        <Col lg="4" class="pb-2">
            <Button>Default Button</Button>
        </Col>
        <Col lg="4" class="pb-2">
            <Button size="lg">Large Button</Button>
        </Col>
    </Row>
</template>

<script lang="ts" setup>
import {Row, Col, Button} from "../../src"
</script>
