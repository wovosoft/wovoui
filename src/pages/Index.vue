<template>
    <Card style="text-align: justify;">
        <h2>Build fast, responsive sites with Bootstrap</h2>
        <p>
            This UI Library is inspired by the most famous
            <a target="_blank" href="https://getbootstrap.com/">bootstrap-vue</a>
            UI Library. Actually most of the ideas are coming
            from this UI Library.
        </p>
        <h2>Why Another <b>bootstrap-vue</b> UI Library?</h2>
        <p>
            Recently I was trying to upgrade the Vue version from 2 to 3 of my applications,
            and most of my application's frontend are written in bootstrap-vue. But I found that
            my favorite UI Design framework is not upgraded to Vue3. So, I have decided to write
            similar framework by myself because I was in hurry.
        </p>
        <div class="text-center">
            <Button variant="primary" size="lg">
                GET STARTED
            </Button>
        </div>
    </Card>
</template>

<script setup>
import Card from "../components/Card.vue";
import Button from "../components/Button.vue";
</script>
