# Spinner

## About

Bootstrap “spinners” can be used to show the loading state in your projects. They’re built only with HTML and CSS,
meaning you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their
visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

##  Border spinner
Use the border spinners for a lightweight loading indicator.

<WSpinner></WSpinner>

```html
<Spinner></Spinner>
```

##  Colors

<WSpinner class="m-1" :variant="v" v-for="v in ['primary','secondary','success','danger','warning','info','light','dark']">
</WSpinner>

```html
<Spinner :variant="v" v-for="v in ['primary','secondary','success','danger','warning','info','light','dark']">
</Spinner>
```

##  Growing spinner

<WSpinner grow></WSpinner>

```html
<Spinner grow></Spinner>
```

## Grow Spinner Colors

<WSpinner grow class="m-1" :variant="v" v-for="v in ['primary','secondary','success','danger','warning','info','light','dark']">
</WSpinner>

```html
<Spinner grow :variant="v" v-for="v in ['primary','secondary','success','danger','warning','info','light','dark']">
</Spinner>
```

##  Size

<WSpinner class="me-2" size="sm"/>
<WSpinner grow size="sm"/>

```html
<Spinner class="me-2" size="sm"/>
<Spinner grow size="sm"/>
```