<template>
    <h1>Form textarea</h1>
    <p>
        Create multi-line text inputs with support for auto height sizing, minimum and maximum number of rows, and
        contextual states.
    </p>
    <Textarea
        v-model="text"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
    />
    <Tabs class="mt-3">
        <Tab title="Code" active>
            <Highlight code='<Textarea
    v-model="text"
    placeholder="Enter something..."
    rows="3"
    max-rows="6"
/>
<pre class="mt-3 mb-0">{{ text }}</pre>'/>
        </Tab>
        <Tab title="text">
            <Highlight code='{
    text: ref("")
}'/>
        </Tab>
    </Tabs>
    <pre class="mt-3 mb-0">{{ text }}</pre>
    
    <h1>Control sizing</h1>
    <Container fluid>
        <Row>
            <Col sm="2">
                <label for="textarea-small">Small:</label>
            </Col>
            <Col sm="10">
                <Textarea
                    id="textarea-small"
                    size="sm"
                    placeholder="Small textarea"
                ></Textarea>
            </Col>
        </Row>

        <Row class="mt-2">
            <Col sm="2">
                <label for="textarea-default">Default:</label>
            </Col>
            <Col sm="10">
                <Textarea
                    id="textarea-default"
                    placeholder="Default textarea"
                ></Textarea>
            </Col>
        </Row>

        <Row class="mt-2">
            <Col sm="2">
                <label for="textarea-large">Large:</label>
            </Col>
            <Col sm="10">
                <Textarea
                    id="textarea-large"
                    size="lg"
                    placeholder="Large textarea"
                ></Textarea>
            </Col>
        </Row>
    </Container>
    <Highlight code='<Container fluid>
    <Row>
        <Col sm="2">
            <label for="textarea-small">Small:</label>
        </Col>
        <Col sm="10">
            <Textarea
                id="textarea-small"
                size="sm"
                placeholder="Small textarea"
            ></Textarea>
        </Col>
    </Row>

    <Row class="mt-2">
        <Col sm="2">
            <label for="textarea-default">Default:</label>
        </Col>
        <Col sm="10">
            <Textarea
                id="textarea-default"
                placeholder="Default textarea"
            ></Textarea>
        </Col>
    </Row>

    <Row class="mt-2">
        <Col sm="2">
            <label for="textarea-large">Large:</label>
        </Col>
        <Col sm="10">
            <Textarea
                id="textarea-large"
                size="lg"
                placeholder="Large textarea"
            ></Textarea>
        </Col>
    </Row>
</Container>'/>
</template>

<script>
import Textarea from "../../components/Textarea.vue";
import {ref} from "vue";
import Tabs from "../../components/Tabs.vue";
import Tab from "../../components/Tab.vue";
import Highlight from "../../components/Highlight.ts";
import Container from "../../components/Container.vue";
import Row from "../../components/Row.vue";
import Col from "../../components/Col.vue";

export default {
    name: "FormTextarea",
    components: {Col, Row, Container, Highlight, Tab, Tabs, Textarea},
    setup(props) {
        return {
            text: ref("")
        }
    }
}
</script>