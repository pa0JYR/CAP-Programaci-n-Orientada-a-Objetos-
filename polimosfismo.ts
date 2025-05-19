interface IAnimal {
    hacerSonido():void
}

class ClassCat implements IAnimal {

    hacerSonido(): void {
        console.log("Miau!!!")
    }

}

class ClassDog implements IAnimal {
    hacerSonido(): void {
        console.log("Wuau!!")
    }
}

class ClassLion implements IAnimal {
    hacerSonido(): void {
        console.log("Rooarrr!!")
    }
}

function hacerSonidosAnimales(animales:IAnimal[]) {
    animales.forEach( animal => {
        animal.hacerSonido();
    });
}

let gatoObj = new ClassCat();
let perroObj = new ClassDog();
let lionObj = new ClassLion();

let animales = [gatoObj,perroObj,lionObj];

hacerSonidosAnimales(animales)