class Entrenador{
    constructor(Nombre, Rorigen, nmedallas){
        this.Nombre=Nombre;
        this.Rorigen=Rorigen;
        this.nmedallas=nmedallas;
    }
    Presentarse(){
        console.log("Hola, mi nombre es "+this.Nombre);
    }
}
let Entrenador1= new Entrenador("Jose", "Mexico", 3, 2);
console.log(Entrenador1);
Entrenador1.Presentarse();

class Pokemon{
    constructor(Nombrep, nivel, vida, ataque, esp, def, defesp, vel){
        this.Nombrep=Nombrep;
        this.nivel=nivel;
        this.vida=vida;
        this.ataque=ataque;
        this.esp=esp;
        this.def=def;
        this.defesp=defesp;
        this.vel=vel;
    }
    Presentarse(){
        console.log("Pika Pika "+this.Nombrep);
    }
}
let Pikachu1= new Pokemon("Pikachu", 72, 35, 55, 50, 40, 50, 90);
console.log(Pikachu1);
Pikachu1.Presentarse();