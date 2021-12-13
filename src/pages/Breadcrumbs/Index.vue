<template>
    <h1>Breadcrumb</h1>
    <p>
        Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS
        through <code>::before</code> and <code>content</code>.
    </p>
    <Card>
        <Breadcrumb :items="items1"/>
        <hr/>
        <highlightjs
            language="xml"
            :code="'<Breadcrumb :items=&quot;'+JSON.stringify(items1,'\n','    ')+'&quot;></Breadcrumb>'"
        />
    </Card>
    <h2>Breadcrumb items</h2>
    <p>
        Items are rendered using <code>:items</code> prop. It can be an array of objects to provide link and active
        state. Links can
        be href's for anchor tags, or to's for router-links. Active state of last element is automatically set if it is
        undefined.
    </p>
    <Card>
        <highlightjs language="javascript" code="const items = [
  {
    text: 'Home',
    href: 'https://google.com'
  },
  {
    text: 'Posts',
    to: { name: 'home' }
  },
  {
    text: 'Another Story',
    active: true
  }
]"/>
    </Card>
</template>

<script>
import Card from "../../components/Card.vue";
import Breadcrumb from "../../components/Breadcrumb.vue";

export default {
    name: "Breadcrumbs",
    components: {Card, Breadcrumb},
    data() {
        return {
            items1: [
                {
                    text: 'Admin',
                    href: '#'
                },
                {
                    text: 'Manage',
                    href: '#'
                },
                {
                    text: 'Library',
                    active: true
                }
            ]
        }
    }
}
</script>