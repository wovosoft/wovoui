<template>
  <h2>Card</h2>
  <Card title="This is Title" sub-title="This is Sub Title" footer="The Footer">
    <template #header>
      This is header
    </template>
    <CardText>
      This is Body
    </CardText>
    <template #footer>
      This is Card Footer
    </template>
  </Card>
  <div class="row mt-3">
    <div class="col-md-6 col-sm-12">
      <Card img-src="https://via.placeholder.com/350x150" header="Card Image Default">
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
      </Card>
    </div>
    <div class="col-md-6 col-sm-12">
      <Card img-src="https://via.placeholder.com/350x150" img-bottom header="Card Image Bottom">
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
      </Card>
    </div>
    <div class="col-md-6 col-sm-12">
      <Card img-src="https://via.placeholder.com/350x150" img-left title="Card Image Left" img-width="200">
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
      </Card>
    </div>
    <div class="col-md-6 col-sm-12">
      <Card img-src="https://via.placeholder.com/350x150" img-right title="Card Image Left" img-width="200">
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
      </Card>
    </div>
    <div class="col-md-6 col-sm-12">
      <Card img-src="https://via.placeholder.com/350x150" overlay title="Card Image Overlay">
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
        Hello Bangladesh . Hello Bangladesh . Hello Bangladesh . Hello Bangladesh .
      </Card>
    </div>
    <div class="col-md-6 col-sm-12">
      <div class="card bg-dark text-white">
        <img src="https://via.placeholder.com/350x150" class="card-img" alt="...">
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import CardText from "../components/CardText.vue";

export default {
  name: "DemoCard",
  components: {CardText, Card}
}
</script>