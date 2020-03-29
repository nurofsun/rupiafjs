document.addEventListener("DOMContentLoaded", function() {
    function toRupiah(angka) {
        let chars = angka.toString(),
            start = 0,
            step = 3,
            separator = ".",
            result = '';
        if (chars.length != 0)  {
            chars = chars.replace(/\./g,'');
            let sisa = chars.length % step;
            let repeater = chars.length / step;
            chars = chars.split("");
            if (sisa == 0) {
                for (let i=0; i < repeater; i++) {
                    chars.splice(chars.length - (step + i), 0, ".");
                    step += 3;
                }
                chars = chars.join("");
                chars = chars.substring(1)
            } else {
                repeater -= 1;
                for (let i=0; i < repeater; i++) {
                    chars.splice(chars.length - (step + i), 0, ".");
                    step += 3;
                }
                chars = chars.join("");
            }
        }
        return chars;
    }
    document.getElementById("nominal").addEventListener('keyup', function() {
        event.target.value = toRupiah(event.target.value);
    });
});

