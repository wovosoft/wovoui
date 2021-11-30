<template>
  <h2>List Group</h2>
  <ListGroup>
    <ListGroupItem active href="#bal">Active List 1</ListGroupItem>
    <ListGroupItem v-for="i in 5" :disabled="i+1===3" :button="i+1===2">
      List {{ i + 1 }}
    </ListGroupItem>
  </ListGroup>
  <h2>Flush List Group</h2>
  <ListGroup flush>
    <ListGroupItem v-for="i in 5" :disabled="i===3">List {{ i }}</ListGroupItem>
  </ListGroup>
  <h2>Numbered List Group</h2>
  <ListGroup numbered>
    <ListGroupItem v-for="i in 5" :disabled="i===3">List {{ i }}</ListGroupItem>
  </ListGroup>
  <h2>Horizontal List Group</h2>
  <ListGroup horizontal>
    <ListGroupItem v-for="i in 5" :disabled="i===3">List {{ i }} Horizontal</ListGroupItem>
  </ListGroup>
  <h2>Small Horizontal List Group</h2>
  <ListGroup horizontal="sm">
    <ListGroupItem v-for="i in 5" :disabled="i===3" :variant="i===4?'dark':null">List {{ i }} Horizontal</ListGroupItem>
  </ListGroup>
</template>

<script>
import ListGroup from "../components/ListGroup.vue";
import ListGroupItem from "../components/ListGroupItem.vue";

export default {
  components: {ListGroupItem, ListGroup}
}
</script>