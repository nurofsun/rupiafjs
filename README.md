# Rupiaf.js

Rupiaf is a dead simple converter number to rupiah format. written with TypeScript and transform it to vanilla JS, no dependencies.

![Demo Rupiaf](./Rupiaf-test.gif)

## Usage

### Basic
```
const rupiah = new Rupiaf(10000).convert();
console.log(rupiah);
```
### For input text.
```
document.querySelector('.input').addEventListener('keyup', function(event) {
    event.target.value = new Rupiaf(event.target.value);
});
```
Thanks.
