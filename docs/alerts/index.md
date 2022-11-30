# Alerts

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Overview


```vue

<Alert v-for="v in ['primary','secondary','success','danger','info','light','dark']" :variant="v" show>
A simple {{v}} alert—check it out!
</Alert>
```

## Dismissible Alert



```vue

<Alert v-for="v in ['primary','secondary','success','danger','info','light','dark']" :variant="v" dismissible show>
A simple {{v}} alert—check it out!
</Alert>
```

## Auto Dismiss

`<Alert>`s can be automatically dismissed by using `countdown` prop. Value for `countdown` prop should be the number of
seconds of visibility, after the defined period in seconds, the `<Aler>` will be dismissed automatically.


```vue

<Alert v-for="v in ['primary','secondary','success','danger','info','light','dark']"
       :variant="v"
       :countdown="10"
       dismissible show>
<template #default="{countdown,timeoutNow}">
    Countdown: {{countdown}} , Timeout: {{timeoutNow}}
</template>
</Alert>
```

## Countdown step

Typically, countdown step is 1 second. It can be changed by setting value for the prop `countdownStep`.

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

## Events

- `dismisssed` : emits with current state when `<Alert>` is dismissed.
- `countdown`  : emits with current `timeoutNow` value, when `timeoutNow` value is decreased.

