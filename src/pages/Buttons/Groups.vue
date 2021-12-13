<template>
    <h1>Button group</h1>
    <p>Group a series of buttons together on a single line or stack them in a vertical column.</p>

    <h2>
        Basic example
    </h2>
    <Card class="mb-3">
        <ButtonGroup aria-label="Basic example">
            <Button variant="primary">Left</Button>
            <Button variant="primary">Middle</Button>
            <Button variant="primary">Right</Button>
        </ButtonGroup>
        <hr>
        <Highlight language="xml" code='<ButtonGroup aria-label="Basic example">
    <Button variant="primary">Left</Button>
    <Button variant="primary">Middle</Button>
    <Button variant="primary">Right</Button>
</ButtonGroup>'/>
    </Card>

    <h2>Mixed styles</h2>
    <Card class="mb-3">
        <ButtonGroup aria-label="Basic mixed styles example">
            <Button variant="warning">Left</Button>
            <Button variant="danger">Middle</Button>
            <Button variant="primary">Right</Button>
        </ButtonGroup>
        <hr>
        <Highlight language="xml" code='<ButtonGroup aria-label="Basic mixed styles example">
    <Button variant="warning">Left</Button>
    <Button variant="danger">Middle</Button>
    <Button variant="primary">Right</Button>
</ButtonGroup>'/>
    </Card>

    <h2>Outlined styles</h2>
    <Card class="mb-3">
        <ButtonGroup aria-label="Basic outlined example">
            <Button variant="primary" outline>Left</Button>
            <Button variant="primary" outline>Middle</Button>
            <Button variant="primary" outline>Right</Button>
        </ButtonGroup>
        <hr>
        <Highlight language="xml" code='<ButtonGroup aria-label="Basic outlined example">
    <Button variant="primary" outline>Left</Button>
    <Button variant="primary" outline>Middle</Button>
    <Button variant="primary" outline>Right</Button>
</ButtonGroup>'/>
    </Card>

    <h2>Checkbox and radio button groups</h2>
    <Card class="mb-3">
        <ButtonGroup aria-label="Basic checkbox toggle button group">
            <Checkbox button v-for="x in 5">Checkbox {{ x }}</Checkbox>
        </ButtonGroup>
        <hr/>
        <Highlight language="xml" code='<ButtonGroup aria-label="Basic checkbox toggle button group">
    <Checkbox button v-for="x in 5">Checkbox {{x}}</Checkbox>
</ButtonGroup>'/>
    </Card>

    <h2>Button toolbar</h2>
    <p>
        Combine sets of button groups into button toolbars for more complex components.
    </p>
    <Card class="mb-3">
        <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup class="me-2" aria-label="First group">
                <Button variant="primary">1</Button>
                <Button variant="primary">2</Button>
                <Button variant="primary">3</Button>
                <Button variant="primary">4</Button>
            </ButtonGroup>
            <ButtonGroup class="me-2" aria-label="Second group">
                <Button variant="secondary">5</Button>
                <Button variant="secondary">6</Button>
                <Button variant="secondary">7</Button>
            </ButtonGroup>
            <ButtonGroup aria-label="Third group">
                <Button variant="info">8</Button>
            </ButtonGroup>
        </ButtonToolbar>
        <hr>
        <Highlight language="xml" code='<ButtonToolbar aria-label="Toolbar with button groups">
    <ButtonGroup class="me-2" aria-label="First group">
        <Button variant="primary">1</Button>
        <Button variant="primary">2</Button>
        <Button variant="primary">3</Button>
        <Button variant="primary">4</Button>
    </ButtonGroup>
    <ButtonGroup class="me-2" aria-label="Second group">
        <Button variant="secondary">5</Button>
        <Button variant="secondary">6</Button>
        <Button variant="secondary">7</Button>
    </ButtonGroup>
    <ButtonGroup aria-label="Third group">
        <Button variant="info">8</Button>
    </ButtonGroup>
</ButtonToolbar>'/>
    </Card>
    <p>
        Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you’ll likely
        need some utilities though to space things properly.
    </p>
    <Card class="mb-3">
        <ButtonToolbar class="mb-3" aria-label="Toolbar with button groups">
            <ButtonGroup class="me-2" aria-label="First group">
                <Button variant="secondary" outline>1</Button>
                <Button variant="secondary" outline>2</Button>
                <Button variant="secondary" outline>3</Button>
                <Button variant="secondary" outline>4</Button>
            </ButtonGroup>
            <InputGroup>
                <InputGroupText>@</InputGroupText>
                <Input
                    placeholder="Input group example"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                />
            </InputGroup>
        </ButtonToolbar>

        <ButtonToolbar justified aria-label="Toolbar with button groups">
            <ButtonGroup aria-label="First group">
                <Button variant="secondary" outline>1</Button>
                <Button variant="secondary" outline>2</Button>
                <Button variant="secondary" outline>3</Button>
                <Button variant="secondary" outline>4</Button>
            </ButtonGroup>
            <InputGroup class="input-group">
                <InputGroupText>@</InputGroupText>
                <Input
                    placeholder="Input group example"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon2"
                />
            </InputGroup>
        </ButtonToolbar>
        <hr/>
        <Highlight language="xml" code='<ButtonToolbar class="mb-3" aria-label="Toolbar with button groups">
        <ButtonGroup class="me-2" aria-label="First group">
            <Button variant="secondary" outline>1</Button>
            <Button variant="secondary" outline>2</Button>
            <Button variant="secondary" outline>3</Button>
            <Button variant="secondary" outline>4</Button>
        </ButtonGroup>
        <InputGroup>
            <InputGroupText>@</InputGroupText>
            <Input
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
            />
        </InputGroup>
    </ButtonToolbar>

    <ButtonToolbar justified aria-label="Toolbar with button groups">
        <ButtonGroup aria-label="First group">
            <Button variant="secondary" outline>1</Button>
            <Button variant="secondary" outline>2</Button>
            <Button variant="secondary" outline>3</Button>
            <Button variant="secondary" outline>4</Button>
        </ButtonGroup>
        <InputGroup class="input-group">
            <InputGroupText>@</InputGroupText>
            <Input
                placeholder="Input group example"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon2"
            />
        </InputGroup>
    </ButtonToolbar>'/>
    </Card>

    <h2>Sizing</h2>
    <p>
        Instead of applying button sizing to every button in a group, just add size to each button group,
        including each one when nesting multiple groups.
    </p>
    <Card>
        <div class="mb-2" v-for="size in ['lg',null,'sm']">
            <ButtonGroup :size="size" aria-label="Button Group">
                <Button outline>Left</Button>
                <Button outline>Middle</Button>
                <Button outline>Right</Button>
            </ButtonGroup>
        </div>
        <hr/>
        <Highlight
            language="xml"
            code="<div class=&quot;mb-2&quot; v-for=&quot;size in ['lg',null,'sm']&quot;>
    <ButtonGroup :size=&quot;size&quot; aria-label=&quot;Button Group&quot;>
        <Button outline>Left</Button>
        <Button outline>Middle</Button>
        <Button outline>Right</Button>
    </ButtonGroup>
</div>"/>

    </Card>
</template>

<script>
import Card from "../../components/Card.vue";
import ButtonGroup from "../../components/ButtonGroup.vue";
import Button from "../../components/Button.vue";
import Checkbox from "../../components/Checkbox.vue";
import ButtonToolbar from "../../components/ButtonToolbar.vue";
import InputGroup from "../../components/InputGroup.vue";
import InputGroupText from "../../components/InputGroupText.vue";
import Input from "../../components/Input.vue";
import Highlight from "../../components/Highlight.ts";

export default {
    name: "Groups",
    components: {Input, InputGroupText, InputGroup, ButtonToolbar, Checkbox, Button, ButtonGroup, Card, Highlight}
}
</script>
