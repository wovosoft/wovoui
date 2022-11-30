# Form Rating

`<Rating>` is a custom rating component, built with Bootstrap's icon classes. Internally it uses `<Icon>` component.

<WRating v-model="rating" class="border p-1"/>
<br>
<WInput type="number" v-model="rating"/>

##  Variant and color

Easily apply one of the Bootstrap theme color variants to the rating icon via the `variant` prop.
The default is to use the default form control text color.

<div>
<WRating v-model="rating2" variant="warning" class="mb-1 border p-2"></WRating>
<WRating v-model="rating2" variant="success" class="mb-1 border p-2"></WRating>
<WRating v-model="rating2" variant="danger" class="mb-1 border p-2"></WRating>
<WRating v-model="rating2" variant="primary" class="mb-1 border p-2"></WRating>
<WRating v-model="rating2" variant="info" class="mb-1 border p-2"></WRating>
<p class="mt-2">Value: {{ rating2 }}</p>
</div>



