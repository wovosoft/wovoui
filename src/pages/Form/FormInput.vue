<template>
    <h1>Textual and Value inputs</h1>
    <p>
        Create various type inputs such as:
        <code>text</code>,
        <code>password</code>,
        <code>number</code>,
        <code>url</code>, <code>email</code>,
        <code>search</code>, <code>range</code>,
        <code>date</code> and more.
    </p>

    <div>
        <Input v-model="text1" placeholder="Enter your name"/>
        <div class="mt-2">Value: {{ text1 }}</div>
    </div>
    <Highlight
        code='<template>
  <div>
    <Input v-model="text" placeholder="Enter your name"></Input>
    <div class="mt-2">Value: {{ text }}</div>
  </div>
</template>

<script>
  import Input from "../../components/Input.vue";
  export default {
  components:{Input},
    data() {
          return {
             text: &apos;&apos;
        }
    }
}
</script>'/>


    <h2>Input type</h2>
    <p>
        <code>&lt;Input&gt;</code> defaults to a text input, but you can set the type prop to one of the supported
        native browser HTML5 types:
        <template v-for="(c,i) in types">
            <code>{{ c }}</code> {{ i + 1 < types.length ? ', ' : '.' }}
        </template>
    </p>
    <div class="border p-2">
        <Row v-for="t in types" class="mb-1">
            <Col md="4">Type <code>{{ t }}</code> :</Col>
            <Col md="8">
                <Input :type="t"/>
            </Col>
        </Row>
    </div>
    <Highlight :code='`<Row v-for="t in types" class="mb-1">
    <Col md="4">Type <code>{{ t }}</code> : </Col>
    <Col md="8">
        <Input :type="t"/>
    </Col>
</Row>
<script>
export default{
    setup(props) {
        return {
            types: ${JSON.stringify(types,null,"\t\t")}
        }
    }
}
</script>`'/>

    <h2>Control sizing</h2>
    <p>Set heights using the <code>size</code> prop to <code>sm</code> or <code>lg</code> for small or large
        respectively.</p>
    <p>To control width, place the input inside standard Bootstrap grid column.</p>
    <div class="border p-2">
        <Row class="my-1">
            <Col sm="2">
                <label for="input-small">Small:</label>
            </Col>
            <Col sm="10">
                <Input id="input-small" size="sm" placeholder="Enter your name"></Input>
            </Col>
        </Row>

        <Row class="my-1">
            <Col sm="2">
                <label for="input-default">Default:</label>
            </Col>
            <Col sm="10">
                <Input id="input-default" placeholder="Enter your name"></Input>
            </Col>
        </Row>

        <Row class="my-1">
            <Col sm="2">
                <label for="input-large">Large:</label>
            </Col>
            <Col sm="10">
                <Input id="input-large" size="lg" placeholder="Enter your name"></Input>
            </Col>
        </Row>
    </div>
    <Highlight code='<Row class="my-1">
    <Col sm="2">
        <label for="input-small">Small:</label>
    </Col>
    <Col sm="10">
        <Input id="input-small" size="sm" placeholder="Enter your name"></Input>
    </Col>
</Row>

<Row class="my-1">
    <Col sm="2">
        <label for="input-default">Default:</label>
    </Col>
    <Col sm="10">
        <Input id="input-default" placeholder="Enter your name"></Input>
    </Col>
</Row>

<Row class="my-1">
    <Col sm="2">
        <label for="input-large">Large:</label>
    </Col>
    <Col sm="10">
        <Input id="input-large" size="lg" placeholder="Enter your name"></Input>
    </Col>
</Row>'/>
</template>

<script>
import Input from "../../components/Input.vue";
import {ref} from "vue";
import Highlight from "../../components/Highlight.ts";
import Row from "../../components/Row.vue";
import Col from "../../components/Col.vue";

export default {
    name: "FormInput",
    components: {Col, Row, Highlight, Input},
    setup(props) {
        return {
            text1: ref(""),
            types: ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'date', 'datetime', 'datetime-local', 'month', 'week', 'time', 'range', 'color']
        }
    }
}
</script>