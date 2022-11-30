# Charts

`Chart` component is implemented using [Chart.js](https://www.chartjs.org/docs/latest/) javascript library.

## Basic Example

<select v-model="chartData.type">
<option v-for="op in ['bar','line','scatter','bubble','pie','doughnut','polarArea','radar']">
{{op}}
</option>
</select>

<WChart :data="chartData.data"
:type="chartData.type"
:options="chartData.options"></WChart>

```html

<template>
    <Chart :data="chartData.data"
           :type="chartData.type"
           :options="chartData.options"
    />
</template>

<script setup lang="ts">
    import {Chart} from "@wovosoft/wovoui";

    const chartData = {
        type: "bar",
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
</script>

```

## Chart.js API

`Chart.js` API methods are exposed to apply reactivity to the chart easily. That means you can
use `Chart.js` [API METHODS](https://www.chartjs.org/docs/latest/developers/api.html) using component refs like given
below example:

```ts
$refs.component_ref.update();
$refs.component_ref.destroy();
```

Not all methods, properties of `Chart.js` are exposed. In case you want to have more control, You can use the `Chart.js`
instance directly. It's exposed.

```ts
$refs.component_ref.chart.update();
$refs.component_ref.chart.destroy();
```

<script setup lang="ts">
import {reactive} from "vue"; 

const chartData = reactive({
    type: "bar",
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
</script>