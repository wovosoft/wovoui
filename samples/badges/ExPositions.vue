<template>
    <Container class="p-5 border">
        <Row>
            <Col>
                <Button variant="primary" class="position-relative">
                    Inbox
                    <Badge variant="danger" pill position="top-right">
                        99+
                        <span class="visually-hidden">unread messages</span>
                    </Badge>
                </Button>
            </Col>
            <Col>
                <Button variant="primary" class="position-relative">
                    Inbox
                    <Badge variant="danger" pill position="top-left">
                        99+
                        <span class="visually-hidden">unread messages</span>
                    </Badge>
                </Button>
            </Col>
        </Row>
        <Row class="mt-5">
            <Col>
                <Button variant="primary" class="position-relative">
                    Inbox
                    <Badge variant="danger" pill position="bottom-right">
                        99+
                        <span class="visually-hidden">unread messages</span>
                    </Badge>
                </Button>
            </Col>
            <Col>
                <Button variant="primary" class="position-relative">
                    Inbox
                    <Badge variant="danger" pill position="bottom-left">
                        99+
                        <span class="visually-hidden">unread messages</span>
                    </Badge>
                </Button>
            </Col>
        </Row>
    </Container>
</template>

<script lang="ts" setup>
import {Row, Col, Button, Badge, Container} from "../../src"
</script>
