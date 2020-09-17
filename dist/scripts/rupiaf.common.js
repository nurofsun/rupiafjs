export default class Rupiaf {
    constructor(money) {
        this.money = money;
    }
    convert() {
        this.money = this.money.toString().replace(/\./g, '');
        let step = 3, sisa = this.money.length % step, counter = Math.floor(this.money.length / step);
        this.money = this.money.split('');
        if (sisa == 0) {
            if (counter != 1) {
                for (let i = 0; i < counter; i++) {
                    this.money.splice(this.money.length - (step++), 0, '.');
                    step += 3;
                }
                this.money = this.money.join('');
                return this.money.substring(1);
            }
            return this.money.join('');
        }
        else {
            for (let i = 0; i < counter; i++) {
                this.money.splice(this.money.length - (step++), 0, '.');
                step += 3;
            }
            return this.money.join('');
        }
    }
    clean() {
        this.money = this.money.replace(/\./g, '');
        return parseInt(this.money);
    }
}
//# sourceMappingURL=rupiaf.common.js.map