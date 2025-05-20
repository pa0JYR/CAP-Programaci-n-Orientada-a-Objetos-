/* Nivel 1: Clase vehiculo */
class Vehiculo {
    public marca : string;
    public modelo : string;
    constructor(marca : string, modelo : string) {
        this.marca = marca;
        this.modelo = modelo;
    }
    /**
     * arrancar
     */
    public arrancar() : void {
        console.log ( `${this.marca} ${this.modelo} esta arrancando`);
    }
    /**
     * detener
     */
    public detener() : void {
        console.log(`${this.marca} ${this.modelo} se ha detenido`);
    }
}
// Nivel 2: Subclase Coche que hereda de Vehiculo
class Coche extends Vehiculo {
    public numeroDePuertas: number;

    constructor(marca: string, modelo: string, numeroDePuertas: number) {
        super(marca, modelo);/* Se esta llamando al constructor de nuestra clase padre */
        this.numeroDePuertas = numeroDePuertas;
    }

    public tocarBocina(): void {
        console.log(`${this.marca} ${this.modelo} está tocando la bocina.`);
    }
}

// Nivel 3: Subclase Deportivo que hereda de Coche
class Deportivo extends Coche {
    public esConvertible: boolean;

    constructor(marca: string, modelo: string, numeroDePuertas: number, esConvertible: boolean) {
        super(marca, modelo, numeroDePuertas);
        this.esConvertible = esConvertible;
    }

    public acelerar(): void {
        console.log(`${this.marca} ${this.modelo} está acelerando rápidamente.`);
    }
}

// Ejemplo de uso
const miVehiculo = new Vehiculo("Toyota", "Corolla");
miVehiculo.arrancar();
miVehiculo.detener();

const miCoche = new Coche("Honda", "Civic", 4);
miCoche.arrancar();
miCoche.tocarBocina();

const miDeportivo = new Deportivo("Ferrari", "Spider", 2, true);
miDeportivo.arrancar();
miDeportivo.acelerar();
miDeportivo.detener();