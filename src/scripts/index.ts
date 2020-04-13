class Rupiaf {
    public angka: any;

    constructor(angka: any) {
        this.angka = angka;
    }

    convert() {
        let chars: any = this.angka.toString(),
            start: number = 0,
            step: number = 3,
            separator: string = ".",
            result: string = '';
        if (chars.length != 0)  {
            chars = chars.replace(/\./g,'');
            let sisa: number = chars.length % step;
            let repeater: number = chars.length / step;
            chars = chars.split("");
            if (sisa == 0) {
                for (let i: number =0; i < repeater; i++) {
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
}
