"use strict";
var Rupiaf = /** @class */ (function () {
    function Rupiaf(angka) {
        this.angka = angka;
    }
    Rupiaf.prototype.convert = function () {
        var chars = this.angka.toString(), start = 0, step = 3, separator = ".", result = '';
        if (chars.length != 0) {
            chars = chars.replace(/\./g, '');
            var sisa = chars.length % step;
            var repeater = chars.length / step;
            chars = chars.split("");
            if (sisa == 0) {
                for (var i = 0; i < repeater; i++) {
                    chars.splice(chars.length - (step + i), 0, ".");
                    step += 3;
                }
                chars = chars.join("");
                chars = chars.substring(1);
            }
            else {
                repeater -= 1;
                for (var i = 0; i < repeater; i++) {
                    chars.splice(chars.length - (step + i), 0, ".");
                    step += 3;
                }
                chars = chars.join("");
            }
        }
        return chars;
    };
    return Rupiaf;
}());
//# sourceMappingURL=index.js.map