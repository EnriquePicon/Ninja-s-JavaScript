class Ninja {

    constructor(nombre, salud) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza =  3;
    }
    
    sayname() {
        return "Ninja";
    }

    showStats(){
        return "Nombre:"+this.nombre + "Salud: "+this.salud + "Fuerza:"+this.fuerza +"Velocidad:"+this.velocidad
    }

    drinkSake() {
        this.salud +=10;
        console.log("Si estas lejos de casa, es ahora de tomar drinkSake: "+ this.salud);
    }
}

const  Ninja2 = new Ninja("Ninja", "Salud")
console.log(Ninja2.sayname());
console.log(Ninja2.showStats());
console.log(Ninja2.drinkSake());

module.exports = Ninja;

