# Rupiaf.js

<p>
        <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/nurofsun/Rupiaf.js">
        <img alt="GitHub" src="https://img.shields.io/github/license/nurofsun/Rupiaf.js">
        <img alt="GitHub stars" src="https://img.shields.io/github/stars/nurofsun/Rupiaf.js?style=social">
        <img alt="GitHub issues" src="https://img.shields.io/github/issues/nurofsun/Rupiaf.js">
</p>

Rupiaf is a dead simple converter number to rupiah format. written with TypeScript and transform it to vanilla JS, no dependencies.

## Features
- Lightweight.
- Flexible.
- Support form element, but you must to use `clean()` method on `submit` event listener. [See example below.](#add-to-your-html-page)

<p align="center"><img src="./demo.gif" alt="Rupiaf.js convert any number to rupiah."></p>

**Note:** demo above use my own css to styling input element, it's excluded from this library.

### Build Tool (Webpack)

Coming soon.

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
