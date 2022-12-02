# Bootstrap Icons

[wovoui-icons](https://github.com/wovosoft/wovoui-icons) are imported
from [Bootstrap 5 icons](https://icons.getbootstrap.com). There are almost 1522 icons.
And in the future, if Bootstrap provides some more icons, those will be available too as soon as possible.

[wovoui-icons](https://github.com/wovosoft/wovoui-icons) are wrapped in a separate package so that it's dependency can 
be optional.

## Getting Started

Of-course You can use the icons using the provided [methods](https://icons.getbootstrap.com/#install) of [Bootstrap 5](https://icons.getbootstrap.com). For example,

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
```

```scss
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
```

```javascript
import "bootstrap-icons"
```

## Installation

### Using NPM

```shell
npm install @wovosoft/wovoui-icons 
```

### Using yarn

```shell
yarn add @wovosoft/wovoui-icons
```

## How to Use

```vue

<template>
    <Activity :size="5"/>
    <Alarm :size="5"/>
</template>
<script>
import {Activity, Alarm} from "@wovosoft/wovoui-icons";

export default {
    components: {Activity, Alarm}
}
</script>
```

<WCard body-class="text-center">
<IconActivity :size="5" class="me-5"/>
<IconAlarm :size="5"/>
</WCard>

## List of Suppoerted Icons

<WInput type="search" v-model="filter" placeholder="Search Icons..."></WInput>
<WContainer class="container"><WRow>
<WCol class="p-1 text-center" :md="icons[icon]?8:3" :offset-md="icons[icon]?2:null" sm="12" v-for="icon in theIcons">
<div class="border icon-box"
tabindex="0" 
:class="!!icons[icon]?'p-3':'p-1'" 
style="cursor: pointer;" 
@focus="toggleVisibility(icon)"
@click="toggleVisibility(icon)">
<component :is="'Icon'+icon" :size="2"></component>
<div class="mt-2" v-if="icons[icon]"><code>&lt;{{icon}} /&gt;</code> or <code>&lt;{{kebabCase(icon)}} /&gt;</code></div>
<div class="mt-2" v-else>{{icon}}</div>
<p v-if="icon.startsWith('_') && icons[icon]">
Because {{icon.replace('_','')}}'s type is 'number', underscore (_) symbol is used.
</p>
</div>
<div v-if="icons[icon]" class="language-javascript ext-js line-numbers-mode">
<pre class="language-javascript"><code><span class="token keyword">import</span> { {{icon}} } <span class="token keyword">from</span> <span class="token string">"@wovosoft/wovoui-icons"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>{{icon}}<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code>
</pre>
<div class="line-numbers">
<span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span>
</div></div></WCol></WRow></WContainer>


<script setup>
import {computed, ref} from "vue"; 
import * as icons_list from "@wovosoft/wovoui-icons";
import kebabCase from "lodash/kebabCase";
const icons = ref({});
Object.entries(icons_list).map(i=>i[0]).forEach(i=>icons.value[i]=false);
const filter=ref("");
const theIcons = computed(()=>Object.keys(icons.value).filter(icon=>icon.toLowerCase().includes(filter.value.toLowerCase())));
const toggleVisibility=(el)=>{
    Object.keys(icons.value).filter(i=>!!icons.value[i]).forEach(i=>icons.value[i]=false);
    icons.value[el]=true;
}
</script>
<style>
.icon-box:hover{
    transform: scale(1.1);
    background: white;
    transition: all .1s ease-in;
    box-shadow: 0px 3px 10px 3px lightblue;
    outline: black;   
}
</style>