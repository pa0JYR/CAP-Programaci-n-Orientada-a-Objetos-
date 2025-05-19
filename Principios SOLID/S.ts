/* responsabilidad unica*/
class Employee {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public printTimeSheetReport(): void {
    console.log(`Generando informe de la hoja de tiempo para ${this.name}...`);/* Esta parte no corresponde a empleado */
  }
}
/** Se crea una clase que tiene solo una repsonsabilidad, en el cual recibe un objeto  
 * de tipo empleado 
*/
//  Single responsability => Principio Aplicado
class TimeSheetReport {
  public printTimeSheetReport(employe: Employee): void {
    console.log(
      `Generando informe de la hoja de tiempo para ${employe.getName()}...`
    );
  }
}

// Ejemplo de uso
const empleado = new Employee("Juan Pérez");
console.log(empleado.getName()); // Salida: Juan Pérez
empleado.printTimeSheetReport(); // Salida: Generando informe de la hoja de tiempo para Juan Pérez...

const timeSheetReport = new TimeSheetReport();
timeSheetReport.printTimeSheetReport(empleado);