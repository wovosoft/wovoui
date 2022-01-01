<template>
    <h1>Alerts</h1>
    <p>
        Provide contextual feedback messages for typical user actions with the handful of available and flexible alert
        messages.
    </p>

    <h2>Overview</h2>
    <p>
        Alerts are available for any length of text, as well as an optional dismiss button (and optional
        auto-dismissing).
    </p>
    <Alert show>Default Alert</Alert>
    <Alert variant="success" show>Success Alert</Alert>
    <Highlight code='<Alert show>Default Alert</Alert>
<Alert variant="success" show>Success Alert</Alert>'/>

    <h2><code>v-model</code> support</h2>
    <p>
        You can use the <code>v-model</code> directive to create two-way data bindings on the show prop as in
        <code>v-model="showDismissibleAlert"</code> above. Useful when you use dismissible because when user closes the
        alert, your variable will be updated. Do not use the <code>show</code> prop when using v-model.
    </p>
    <Button @click="alert1=!alert1" class="mb-2">Toggle Alert</Button>
    <Alert v-model="alert1">Toggleable Alert</Alert>
    <Tabs>
        <Tab active title="Template">
            <Highlight code='<Button @click="alert1=!alert1" class="mb-2">Toggle Alert</Button>
<Alert v-model="alert1">Default Alert</Alert>'/>
        </Tab>
        <Tab title="Script">
            <Highlight code='export default {
    setup(props) {
        return {
            alert1: ref(true)
        }
    }
}'/>
        </Tab>
    </Tabs>

    <h2>Contextual variants</h2>
    <p>
        For proper styling of
        <code>&lt;Alert&gt;</code>, use one of the four required contextual variants by setting the variant prop to one
        of the following: <code>info</code>, <code>success</code>, <code>warning</code> or <code>danger</code>.
        The default is <code>info</code>.
    </p>
    <div>
        <Alert show variant="primary">Primary Alert</Alert>
        <Alert show variant="secondary">Secondary Alert</Alert>
        <Alert show variant="success">Success Alert</Alert>
        <Alert show variant="danger">Danger Alert</Alert>
        <Alert show variant="warning">Warning Alert</Alert>
        <Alert show variant="info">Info Alert</Alert>
        <Alert show variant="light">Light Alert</Alert>
        <Alert show variant="dark">Dark Alert</Alert>
    </div>
    <Highlight code='<div>
    <Alert show variant="primary">Primary Alert</Alert>
    <Alert show variant="secondary">Secondary Alert</Alert>
    <Alert show variant="success">Success Alert</Alert>
    <Alert show variant="danger">Danger Alert</Alert>
    <Alert show variant="warning">Warning Alert</Alert>
    <Alert show variant="info">Info Alert</Alert>
    <Alert show variant="light">Light Alert</Alert>
    <Alert show variant="dark">Dark Alert</Alert>
</div>'/>

    <h2>Dismissible alerts</h2>
    <p>
        Using the dismissible prop it's possible to dismiss any
        <code>&lt;Alert&gt;</code> inline. This will add a close <code>X</code> button. Use the
        <code>dismiss-label</code> prop to change the hidden label text associated with the dismiss button.
    </p>
    <Alert show dismissible>
        Dismissible Alert! Click the close button over there <b>&rArr;</b>
    </Alert>

    <h2>Auto dismissing alerts</h2>
    <p>
        To create a <code>&lt;Alert&gt;</code> that dismisses automatically after a period of time, set
        value for <code>countdown</code> prop in seconds you would like the <code>&lt;Alert&gt;</code> to remain visible
        for.
        Only integer number of seconds are supported.
    </p>
    <Button @click="alert2=!alert2">Toggle Alert</Button>
    <Alert @countdown="v=>countdownTime=v" v-model="alert2" dismissible :countdown="10" variant="warning">
        Dismissed in {{ countdownTime }} seconds
    </Alert>

    <Tabs>
        <Tab active title="Template">
            <Highlight code=' <Button @click="alert2=!alert2">Toggle Alert</Button>
<Alert @countdown="v=>countdownTime=v" v-model="alert2" dismissible :countdown="10" variant="warning">
    Dismissed in {{ countdownTime }} seconds
</Alert>'/>
        </Tab>
        <Tab title="Script">
            <Highlight code='export default {
    setup(props) {
        return {
            alert2: ref(true),
            countdownTime: ref(0),
        }
    }
}'/>
        </Tab>
    </Tabs>

    <h2>Fading alerts</h2>
    <p>Use the fade prop to enable animation. By default alerts are not animated.</p>
    <Alert show dismissible fade>Dismissible Alert!</Alert>
    <Highlight code='<Alert show dismissible fade>Dismissible Alert!</Alert>'/>

    <h2>Additional content</h2>
    <p>
        Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
    </p>
    <Alert variant="success" show>
        <AlertHeading>Well done!</AlertHeading>
        <p>
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer
            so that you can see how spacing within an alert works with this kind of content.
        </p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </Alert>
    <Highlight code='<Alert variant="success" show>
        <AlertHeading>Well done!</AlertHeading>
        <p>
            Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer
            so that you can see how spacing within an alert works with this kind of content.
        </p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
    </Alert>'/>
</template>

<script>
import Alert from "../../components/Alert.vue";
import Highlight from "../../components/Highlight.ts";
import {ref} from "vue";
import Button from "../../components/Button.vue";
import Tabs from "../../components/Tabs.vue";
import Tab from "../../components/Tab.vue";
import AlertHeading from "../../components/AlertHeading.vue";

export default {
    name: "AlertIndex",
    components: {AlertHeading, Tab, Tabs, Button, Highlight, Alert},
    setup(props) {
        return {
            alert1: ref(true),
            alert2: ref(true),
            countdownTime: ref(0),
        }
    }
}
</script>
