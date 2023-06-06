console.log("************** DELIVERABLE 05 *********************");

class SlothMachine {
    private coins: number;

    constructor() {
        this.coins = 0;
    }

    play() {
        this.coins++;
        let roulette1 : boolean = Math.random() < 0.5
        let roulette2 : boolean = Math.random() < 0.5
        let roulette3 : boolean = Math.random() < 0.5
        if (roulette1 && roulette2 && roulette3 ){
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log('Good luck next time!!');
        }
    }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();