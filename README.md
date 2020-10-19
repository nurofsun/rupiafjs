# Rupiaf.js

<p>
        <img alt="GitHub file size in bytes" src="https://img.shields.io/github/size/nurofsun/rupiafjs/dist/scripts/rupiaf.min.js">
        <img alt="GitHub" src="https://img.shields.io/github/license/nurofsun/rupiafjs">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/nurofsun/rupiafjs?style=social">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/nurofsun/rupiafjs">
</p>

Rupiaf is a dead simple converter number to rupiah format. written with TypeScript and transform it to vanilla JS, no dependencies.

## Features
- Lightweight.
- Flexible.
- Support form element, but you must to use `clean()` method on `submit` event listener. [See example below.](#add-to-your-html-page)

<p align="center"><img src="./demo.gif" alt="Rupiaf.js convert any number to rupiah."></p>

**Note:** demo above use my own css to styling input element, it's excluded from this library.

### Build Tool (Webpack)
Let's take a look to this simple HTML.

`index.html`
```html
 ...
 <div id="app">
   <form action="/" method="GET" id="nominalForm">
     <input type="text" id="nominalInput" name="nominal">
   </form>
 </div>
 <script src="assets/js/app.bundle.js"></script>
 ...
```

Load js version of this library, because by default it written with typescript, if you're not working with typescript, just import `rupiaf.common.js` as follow.

`app.js`
```js
import Rupiaf from '../../node_modules/rupiaf.js/dist/scripts/rupiaf.common.js'

const nominalInput = document.querySelector('#nominalInput'),
    nominalForm = document.querySelector('#nominalForm');

nominalInput.addEventListener('keyup', function(event) {
    event.target.value = new Rupiaf(event.target.value).convert()
})

// working with form input that store the nominal/currency to database.
nominalForm.addEventListener('submit', function(event) {
    nominalInput.value = new Rupiaf(nominalInput.value).clean()
})
```

### Add To Your HTML Page

Load the production mode if you don't use any build tools.

`index.html`
```html
...
<form method="get" action="#" id="nominalForm">
        <label class="label" for="nominal">Rp.</label>
        <input id="nominal" type="text" name="nominal" placeholder="Nominal" autocomplete="off">
</form>
<script src="dist/scripts/rupiaf.js"></script>
<script src="dist/scripts/app.js"></script>
...
```

`app.js`
```javascript
document.addEventListener('DOMContentLoaded', function() {
        var nominalInput = document.querySelector('#nominal');
        var nominalForm = document.querySelector('#nominalForm');
        nominalInput.addEventListener('keyup', function(event) {
                var rupiaf = new Rupiaf(event.target.value);

                event.target.value = rupiaf.convert()
        })
        nominalForm.addEventListener('submit', function() {
                var rupiaf = new Rupiaf(nominalInput.value)
                nominalInput.value = rupiaf.clean()
        })
        
});
```
