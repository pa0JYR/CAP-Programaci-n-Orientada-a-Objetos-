/** La clase padre no debe de conocer / depender de la clase 
 * Proceso batch
 * API rest 
*/
// Aplicando el principio
interface Database {
  insert(): void;
  update(): void;
  delete(): void;
  select(): void;
}

class MySQLDatabase implements Database {
  insert(): void {
    // Lógica para insertar en MySQL
  }

  update(): void {
    // Lógica para actualizar en MySQL
  }

  delete(): void {
    // Lógica para eliminar en MySQL
  }

  select(): void {}
}

class MongoDB implements Database {
  insert(): void {
    // Lógica para insertar en MongoDB
  }

  update(): void {
    // Lógica para actualizar en MongoDB
  }

  delete(): void {
    // Lógica para eliminar en MongoDB
  }

  select(): void {}
}

class ElasticSearchDB implements Database {
  insert(): void {
    // Lógica para insertar en MongoDB
  }

  update(): void {
    // Lógica para actualizar en MongoDB
  }

  delete(): void {
    // Lógica para eliminar en MongoDB
  }

  select(): void {}
}

class BudgetReport {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  open(date: Date): void {
    // Lógica para abrir el reporte
  }

  save(): void {
    this.database.insert();
  }

  getData() {
    return this.database.select();
  }
}

const handlerSelectData = (typeDB: number) => {
  // const mongDB = new MongoDB();
  // const elastic = new ElasticSearchDB();
  const mysql = new MySQLDatabase();
  const budgetReport = new BudgetReport(mysql);
  return budgetReport.getData();
};