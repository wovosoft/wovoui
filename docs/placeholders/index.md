# Placeholders

Use loading placeholders for your components or pages to indicate something may still be loading.

## About

Placeholders can be used to enhance the experience of your application. They’re built only with HTML and CSS, meaning
you don’t need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility.
Their appearance, color, and sizing can be easily customized with our utility classes.

<div class="card">
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#20c997"></rect></svg>

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#20c997"></rect></svg>
  <div class="card-body">
    <WPlaceholder tag="h5" class="card-title" glow>
      <Placeholder :col="6"></Placeholder>
    </WPlaceholder>
    <WPlaceholder tag="p" class="card-text" glow>
      <WPlaceholder :col="7"/>
      <WPlaceholder :col="4"/>
      <WPlaceholder :col="4"/>
      <WPlaceholder :col="6"/>
      <WPlaceholder :col="8"/>
    </WPlaceholder>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>

```html
<div class="card">
  <img src="..." class="card-img-top" alt="...">

  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" aria-hidden="true">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <Placeholder tag="h5" class="card-title" glow>
      <Placeholder :col="6"></Placeholder>
    </Placeholder>
    <Placeholder tag="p" class="card-text" glow>
      <Placeholder :col="7"/>
      <Placeholder :col="4"/>
      <Placeholder :col="4"/>
      <Placeholder :col="6"/>
      <Placeholder :col="8"/>
    </Placeholder>
    <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
  </div>
</div>
```