/* Principio de sistitución de Liskov 
Al extender una clase debe tener la capacidad de pasar objetos 
de la subclase en lugar de objetos de la clase padre
es decir que se puede */
class Document_ {
  data: string = "";
  filename: string = "";

  constructor() {}

  open(): void {
    // Lógica para abrir el documento
  }
}

class WritableDocument_ extends Document_ {
  save(): void {
    // Lógica para guardar el documento
  }
}

class Project {
  writableDocs: WritableDocument_[] = [];
  documents: Document_[] = [];

  saveAll(): void {
    for (const doc of this.writableDocs) {
      doc.save();
    }
  }

}
/* Ejemplo */

/* class Rectangulo {
    lado : number; 
    ancho : number;
    constructor(lado : number, ancho : number) {
     this.lado = lado;
     this.ancho = ancho;   
    }
    getArea (){
        return this.lado * this.ancho;
    }
}
class Cuadrado {
    lado : number;
    constructor(lado : number) {
        this.lado
    }
} */