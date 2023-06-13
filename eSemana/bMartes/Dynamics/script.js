class  equipo{
    constructor(poke1, poke2){
        this.poke1 =poke1;
        this.poke2 =poke2;
    }
}



class Entrenador extends equipo{
    constructor( poke1, poke2, Nombre, Rorigen, nmedallas){
        super (poke1, poke2)
        this.Nombre    =Nombre;
        this.Rorigen   =Rorigen;
        this.nmedallas =nmedallas;
    }

    Presentarse(){
        console.log("Mi nombre es "+ this.Nombre);
    }
    
    
}



class Pokemon {
    constructor(Nombrep, nivel, vida, ataque, esp, def, defesp, vel, tipo, movimiento1, movimiento2, movimiento3, movimiento4){
        this.Nombrep=Nombrep;
        this.nivel=nivel;
        this.vida=vida;
        this.ataque=ataque;
        this.esp=esp;
        this.def=def;
        this.defesp=defesp;
        this.vel=vel;
        this.tipo=tipo
        this.movimiento1=movimiento1;
        this.movimiento2=movimiento2;
        this.movimiento3=movimiento3;
        this.movimiento4=movimiento4;
    }
  
}


class Movimiento{
    constructor (nombrem, potencia, probabilidad, tipom, categoria){
        this.nombre=nombrem;
        this.potencia=potencia;
        this.probabilidad=probabilidad;
        this.tipom=tipom;
        this.categoria=categoria;
    }
}

//Declaración de movimientos
        //Pikachu
let tilinazo     = new Movimiento("tilinazo", 80, 20, "fuego", "fisico");
let Chispazo     = new Movimiento("Chispazo", 65, 40, "electrico", "fisico");
let Voltio_Cruel = new Movimiento("Voltio Cruel	", 15, 20, "electrico", "especial");
        //Charmander
let Gruñido          = new Movimiento("Gruñido", 55, 80, "fuego", "fisico");
let Ascuas	         = new Movimiento("Ascuas", 60, 60, "fuego", "fisico");
let Furia_Dragón     = new Movimiento("Furia Dragón", 70, 50, "fuego", "especial");
        //MewTwo
let Hiperrayo    = new Movimiento("Hiperrayo ", 80, 35, "psiquico", "fisico");
let Rapidez      = new Movimiento("Rapidez", 30, 70, "psiquico", "fisico");
let Poder_Oculto = new Movimiento("Poder Oculto", 80, 20, "psiquico", "especial");
        //Rattata
let Látigo        = new Movimiento("Gruñido", 15, 80, "normal", "fisico");
let Foco_Energía  = new Movimiento("Foco Energía", 30, 65, "normal", "fisico");
let Mordisco      = new Movimiento("Mordisco ", 50, 50, "normal", "especial");


//Declaración de pokemon
        //equiasho
let Pikachu    = new Pokemon("Pikachu", 72, 35, 55, 50, 40, 50, 90, "Electrico",tilinazo, Chispazo, Voltio_Cruel, Látigo);
let Charmander = new Pokemon("Charmander", 60, 50, 50, 60, 50, 70, 75,"Fuego" , Gruñido, Ascuas, Furia_Dragón, Rapidez);
        //equitilin
let MewTwo    = new Pokemon("MewTwo", 80, 70, 80, 70, 55, 60, 70, "Electrico",tilinazo, Chispazo, Voltio_Cruel, Hiperrayo);
let Rattata   = new Pokemon("Rattata", 30, 40, 40, 50, 40, 45, 70,"Fuego" , Gruñido, Ascuas, Furia_Dragón, tilinazo);

//Declaración de equipo
        //asho
let equiasho  = new equipo (Pikachu,Charmander);
        //tilin
let equitilin = new equipo (Pikachu,Charmander);



//Declaración de entrenador
let Asho= new Entrenador(Pikachu,Charmander, "Asho", "CDMX", 3);
let Tilin= new Entrenador(MewTwo, Rattata, "Tilin", "Sinaloa", 5);






//Pelea


console.log("¡Inicia encuentro!");

Asho.Presentarse();
Tilin.Presentarse();
console.log("Ha finalizado la batalla");
console.log("Ganó el entrenador Asho", Asho);
console.log("Perdió el entrenador Tilin", Tilin);




