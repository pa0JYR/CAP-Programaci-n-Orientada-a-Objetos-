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