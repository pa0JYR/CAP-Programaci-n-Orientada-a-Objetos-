// Clase abstracta para un avión
abstract class Avion {
  constructor(protected modelo: string) {}

  // Método abstracto que debe ser implementado por las subclases
  abstract mostrarInformacion(): void;

  public fly(): void {

  };

}

// Clase para un simulador de vuelo
class AvionSimulador extends Avion {
  private velocidad: number;
  private altitud: number;

  constructor(modelo: string, velocidad: number, altitud: number) {
    super(modelo);
    this.velocidad = velocidad;
    this.altitud = altitud;
  }

  mostrarInformacion(): void {
    console.log(
      `Modelo: ${this.modelo}, Velocidad: ${this.velocidad} km/h, Altitud: ${this.altitud} metros.`
    );
  }
}

// Clase para una aplicación de reserva de vuelos
class AvionReserva extends Avion {
  private asientos: string[];

  constructor(modelo: string, asientos: string[]) {
    super(modelo);
    this.asientos = asientos;
  }

  mostrarInformacion(): void {
    console.log(
      `Modelo: ${this.modelo}, Asientos disponibles: ${this.asientos.join(
        ", "
      )}.`
    );
  }
}

// Ejemplo de uso
const avionSimulador = new AvionSimulador("Boeing 737", 800, 10000);
const avionReserva = new AvionReserva("Airbus A320", ["1A", "1B", "2A", "2B"]);

avionSimulador.mostrarInformacion(); // Salida: Modelo: Boeing 737, Velocidad: 800 km/h, Altitud: 10000 metros.
avionReserva.mostrarInformacion(); // Salida: Modelo: Airbus A320, Asientos disponibles: 1A, 1B, 2A, 2B.