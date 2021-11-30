<template>
  <Container>
    <h2>Dropdowns</h2>
    <Row>
      <Col>
        <Dropdown text="Dropdown" dir="right">
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
        </Dropdown>
      </Col>
      <Col>
        <Dropdown text="Dropdown" menu-dark dir="top">
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
        </Dropdown>
      </Col>
      <Col>
        <Dropdown text="Dropdown" dir="left">
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
        </Dropdown>
      </Col>
    </Row>
    <Row class="mt-3">
      <Col>
        <Dropdown text="Dropdown" dir="right" align="end">
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
        </Dropdown>
      </Col>
      <Col>
        <Dropdown text="Dropdown" menu-dark dir="top" align="end">
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
        </Dropdown>
      </Col>
      <Col>
        <Dropdown text="Dropdown" dir="left" align="end">
          <DropdownItem href="#">Action</DropdownItem>
          <DropdownItem href="#">Another action</DropdownItem>
          <DropdownItem href="#">Something else here</DropdownItem>
        </Dropdown>
      </Col>
    </Row>
    <br>
    <Dropdown text="Left-aligned but right aligned when large screen" menu-end>
      <DropdownHeader>
        Menu Header
      </DropdownHeader>
      <DropdownItem is-text>
        This is Text.
        Amar sonar bangla ami tomay valobasi
      </DropdownItem>
      <DropdownDivider/>
      <DropdownItem href="#">Action</DropdownItem>
      <DropdownItem href="#">Another action</DropdownItem>
      <DropdownItem href="#">Something else here</DropdownItem>
      <DropdownGroup header="Group Header">
        <DropdownItem href="#">Action</DropdownItem>
        <DropdownItem href="#">Another action</DropdownItem>
        <DropdownItem href="#">Something else here</DropdownItem>
        <DropdownButton>Its a Button</DropdownButton>
      </DropdownGroup>
    </Dropdown>
  </Container>
</template>

<script setup>

import Dropdown from "../components/Dropdown.vue";
import Container from "../components/Container.vue";
import Row from "../components/Row.vue";
import Col from "../components/Col.vue";
import DropdownItem from "../components/DropdownItem.vue";
import DropdownDivider from "../components/DropdownDivider.vue";
import DropdownHeader from "../components/DropdownHeader.vue";
import DropdownGroup from "../components/DropdownGroup.vue";
import DropdownButton from "../components/DropdownButton.vue";
</script>
