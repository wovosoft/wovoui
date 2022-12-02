# Close Button

A generic close button for dismissing content like modals and alerts.

## Example

Provide an option to dismiss or close a component with `<ButtonClose>` component. Default styling is limited, but highly
customizable. Modify the Sass variables to replace the default `background-image`. Be sure to include text for screen
readers, as we’ve done with `aria-label`.

<WButtonClose aria-label="Close"></WButtonClose>

```vue

<ButtonClose aria-label="Close"></ButtonClose>
```

## Disabled state

Disabled close buttons change their opacity. Bootstrap have also applied `pointer-events: none` and `user-select: none`
to preventing `hover` and `active` states from triggering.

<WButtonClose aria-label="Close" disabled></WButtonClose>

```vue

<ButtonClose aria-label="Close" disabled></ButtonClose>
```

#   White variant

Change the default button to be white with the `white` prop. 

<div class="bg-dark p-3 rounded-1">
<WButtonClose white aria-label="Close"></WButtonClose>
<WButtonClose white disabled aria-label="Close"></WButtonClose>
</div>

```vue
<div class="bg-dark p-3 rounded-1">
<ButtonClose white aria-label="Close"></ButtonClose>
<ButtonClose white disabled aria-label="Close"></ButtonClose>
</div>
```