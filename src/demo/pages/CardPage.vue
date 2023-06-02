<template>
    <Container class="mt-3">
        <Card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <CardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button href="#" variant="primary">Go somewhere</Button>
        </Card>
    </Container>
</template>

<script lang="ts" setup>
import {Container, Card, CardText, Button} from "@/";
</script>
