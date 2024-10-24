class animal {
    emitirSom(){

    }
}

class cachorro extends animal {
    emitirSom() {
        return "Au Au!";
    }
}

class gato extends animal {
    emitirSom() {
        return "Miau Miau!";
    }
}

function fazerBarulho(animal) {
    console.log(animal.emitirSom());
}

const cachorro1 = new cachorro();
const gato1 = new gato();

fazerBarulho(cachorro1);
fazerBarulho(gato1);