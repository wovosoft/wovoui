

# Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Overview

<<< @/../samples/alerts/ExOverview.vue

<Sample><ExOverview/></Sample>

## Dismissible Alert

<<< @/../samples/alerts/ExDismissible.vue

<Sample><ExDismissible/></Sample>

## Auto Dismiss

`<Alert>`s can be automatically dismissed by using `timeout` prop. Value for `timeout` prop should be the number of
seconds of visibility, after the defined period in seconds, the `<Alert>` will be dismissed automatically.

<<< @/../samples/alerts/ExAutoDismiss.vue

<Sample><ExAutoDismiss/></Sample>

## Countdown step

Typically, countdown step is 1 second. It can be changed by setting value for the prop `timeoutStep`.

## Scoped Slot Support

`countdown` & `timeoutNow` props and `show()`, `hide()` & `toggle()` methods can be accessed in default slots scope.

```vue

<Alert dismissible show>
<template #default="{countdown,timeoutNow,show,hide,toggle}">
    Countdown: {{countdown}} , Timeout: {{timeoutNow}}
</template>
</Alert>
```

## Exposed Methods

`show()`, `hide()` & `toggle()` methods are exposed to the parent components. So, by using refs these methods of an
`<Alert>` component can be accessed.

```vue

<template>
    <Alert dismissible show ref="alert_ref">
        I am an alert box.
    </Alert>
</template>
<script>
import {Alert} from "@wovosoft/wovoui";

export default {
    components: {Alert},
    mounted() {
        this.$refs.alert_ref.show();
        this.$refs.alert_ref.hide();
        this.$refs.alert_ref.toggle();
        /**
         * Check above three expressions.
         */
    }
}
</script>
```

## Additional content

Alerts can also contain additional HTML elements like headings, paragraphs and dividers.

<<< @/../samples/alerts/ExAdditionalContent.vue

<Sample><ExAdditionalContent/></Sample>

## Icons

Similarly, you can use flexbox utilities and Bootstrap Icons to create alerts with icons. Depending on your icons and
content, you may want to add more utilities or custom styles.

In addition, you can use [wovoui-icons](https://github.com/wovosoft/wovoui-icons)

<<< @/../samples/alerts/ExIcons.vue

<Sample><ExIcons/></Sample>

## Events

- `dismisssed` : emits with current state when `<Alert>` is dismissed.
- `countdown`  : emits with current `timeoutNow` value, when `timeoutNow` value is decreased.

<script lang="ts" setup>
import ExOverview from "../../../samples/alerts/ExOverview.vue";
import ExDismissible from "../../../samples/alerts/ExDismissible.vue";
import ExAutoDismiss from "../../../samples/alerts/ExAutoDismiss.vue";
import ExAdditionalContent from "../../../samples/alerts/ExAdditionalContent.vue";
import ExIcons from "../../../samples/alerts/ExIcons.vue";
</script>