export default class Rupiaf {
    constructor(number) {
        this.number = number;
    }
    convert() {
        this.number = this.number.toString().replace(/\./g, '');
        let step = 3,
            sisa = this.number.length % step,
            counter = Math.floor(this.number.length / step);
        this.number = this.number.split('');
        if (sisa == 0) {
            if (counter != 1) {
                for (let i=0; i < counter; i++) {
                    this.number.splice(this.number.length - (step++),0,'.')
                    step += 3;
                }
                this.number = this.number.join('');
                return this.number.substring(1)
            }
            return this.number.join('');
        } else {
            for (let i=0; i < counter; i++) {
                this.number.splice(this.number.length - (step++),0,'.')
                step += 3;
            }
        return this.number.join('');
        }
    }
    clean() {
        this.number = this.number.replace(/\./g,'');
        return parseInt(this.number)
    }
}
