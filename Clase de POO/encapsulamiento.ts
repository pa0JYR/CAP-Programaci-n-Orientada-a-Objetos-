class Avion {
  constructor(protected modelo: string) {}
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

  // Métodos públicos para acceder a los detalles del avión
  public mostrarDetalles(): void {
    console.log(
      `Modelo: ${this.modelo}, Velocidad: ${this.velocidad} km/h, Altitud: ${this.altitud} metros.`
    );
  }


  //Otra forma para colocar y obtener en typescript
  set setVelocidad(velocidad: number) {
    if (velocidad > 0) {
      this.velocidad = velocidad;
      this.VerifivarVelocidad();
    }
  }

  get obtenerDetalles(): string {
    return `Modelo: ${this.modelo}, Velocidad: ${this.velocidad} km/h, Altitud: ${this.altitud} metros.`;
  }

  public setAltitud(altitud: number): void {
    if (altitud >= 0) {
      this.altitud = altitud;
    }
  }

  // Métodos privades para acceder solo en la clase
  private VerifivarVelocidad() {
    if (this.velocidad > 500) {
      console.log("METODO_PRIVADO", "Esta pasando el limite de velocidad.");
    }
  }
}

// Clase para una aplicación de reserva de vuelos
class AvionReserva extends Avion {
  private asientos: string[];

  constructor(modelo: string, asientos: string[]) {
    super(modelo);
    this.asientos = asientos;
  }

  // Método público para mostrar los asientos disponibles
  public mostrarAsientos(): void {
    console.log(
      `Modelo: ${this.modelo}, Asientos disponibles: ${this.asientos.join(
        ", "
      )}.`
    );
  }

  public reservarAsiento(asiento: string): boolean {
    const index = this.asientos.indexOf(asiento);
    if (index !== -1) {
      this.asientos.splice(index, 1);
      return true;
    }
    return false;
  }
}

// Ejemplo de uso
const _avionSimulador = new AvionSimulador("Boeing 737", 800, 10000);
const _avionReserva = new AvionReserva("Airbus A320", [
  "1A",
  "1B",
  "2A",
  "2B",
]);

_avionSimulador.mostrarDetalles(); // Salida: Modelo: Boeing 737, Velocidad: 800 km/h, Altitud: 10000 metros.

_avionSimulador.setVelocidad = 850;
console.log("DETALLES CON GET", _avionSimulador.obtenerDetalles);

_avionReserva.mostrarAsientos(); // Salida: Modelo: Airbus A320, Asientos disponibles: 1A, 1B, 2A, 2B.
_avionReserva.reservarAsiento("1A");
_avionReserva.mostrarAsientos(); // Salida: Modelo: Airbus A320, Asientos disponibles: 1B, 2A, 2B.