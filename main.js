//deea code

// function showHeroes() { 
//     document.getElementById("hero").style.display = "flex";
//     document.getElementById("title").style.display = "none";
//     battlelog.style.display = "inherit";
//     start.style.display = "none";
//  }

// function roundResults(){
//     document.getElementById("battlelogContainer").innerHTML = res;
//     modal.style.display = "block";
// }

// function clearModal(e) {
//     if (e.target == modal) {
//         modal.style.display = 'none';
//     }
// }


// start.addEventListener('click', showHeroes);
// battlelog.addEventListener('click', roundResults);
// window.addEventListener('click', clearModal);




//deaa code







//game core

class Hero {
    constructor(name, HP) {
        this.name = name;
        this.HP = HP;
        this.canFly = false;
        this.shield = false;
    }

    attacked(damage) {
        if(this.canFly) {
            let chance = Math.random();
            if(chance > 0.5) {
                console.log(this.name + ' flew away.');
                damage = 0;
            }
        }

        if(this.shield){
            damage *= 0.8;
            console.log(this.name + ' defends with a shield.');
        }

        this.HP -= damage;

        console.log(this.name + ' has been attacked. HP reduced by ' + damage + '. HP remaining: ' + this.HP + '.');
    }
}

class Dwarf extends Hero {
    constructor(name, HP) {
        super(name, HP);
        this.shield = true;
    }

    attack(otherHero) {
        let damage = 10;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage);

    }
}


class Sprite extends Hero {
        constructor(name, HP) {
        super(name, HP);
        this.canFly = true;
    }

    attack(otherHero) {
        let damage = 15;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage);
    }
}


class Drake extends Hero {
    constructor(name, HP) {
        super(name, HP)
        this.canFly = true;
        this.shield = true;
    }

    attack(otherHero) {
        let damage = 5;
        console.log(this.name + " attacked with damage: " + damage + ".");
        otherHero.attacked(damage);
    }
}

class Fight {
    constructor(hero1, hero2) {
        this.hero1 = hero1;
        this.hero2 = hero2;
        this.turn = 0; //turn se referea la tura eroilor si poate avea valori de 0 si 1
    }

    performAttack() {
        if(this.turn === 0) {
            this.hero1.attack(this.hero2);
        }else{
            this.hero2.attack(this.hero1);
        }
    }

    changeTurn() {
        this.turn = 1 - this.turn; //schimbam tura din 0 in 1 si invers
    }

    findWinner() {
        if(this.hero1.HP > 0) {
            console.log(this.hero1.name + " won with " + this.hero1.HP + '.');
        } else if (this.hero2.HP > 0){
            console.log(this.hero2.name + " won with " + this.hero2.HP + '.')
        } else {
            console.log("No heroes left alive.")
        }
    }

    go(){
        do {
            this.performAttack();
            this.changeTurn();
        } while(this.hero1.HP > 0 && this.hero2.HP > 0);
        this.findWinner();
    }
}

let dwarf = new Dwarf('Alfredo', 60);
let sprite = new Sprite('Elf', 45);
let drake = new Drake('Drake', 43);

let epicFight = new Fight(dwarf, sprite);

epicFight.go();

