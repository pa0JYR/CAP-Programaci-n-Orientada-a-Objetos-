/*
# Evaluación Técnica: Máquina Vendedora de Dulces en Programación Orientada a Objetos
## Requisitos Funcionales
1. La máquina debe contener diferentes tipos de dulces, cada uno con sus atributos.
2. Los usuarios pueden seleccionar un dulce para comprar.
3. La máquina debe verificar si hay suficiente stock y fondos (si aplica) para realizar la compra.
4. Después de una venta exitosa, el stock del dulce debe reducirse en uno.
5. Un usuario administrador puede ver las ventas totales y de cada producto.
6. La máquina puede aceptar pagos (simulando pago con moneda o billete).
## Aspectos a Evaluar
- **Organización y modularidad del código:** Uso correcto de clases y objetos.
- **Control de errores:** Manejar casos donde no hay stock suficiente o fondos insuficientes. 
- pago con billetes grandes, cuando ya no haya stock
 */
interface IProducto {
    id : number;
    nombre : string;
    tipo : string;
    precio : number;
    marca : string;
    existencia : number;
    ventas : number; /* contabiliza el numero de compras realizadas */
    enExistencia () : number;/* Mostrar cuanto stock existe */
    realizarCompra () : void;  /* gestiona la compra, es decir que aquí se va a  */
    ventaProducto () : number;
}
/* Para fines practicos las monedas serán catalogadas como billetes */
interface IEfectivo{
     valor : number;
    cantidad : number;
    cantidadDisponible () : void;
    gastoBilletes (cantidaGastada : number) : void;
}
class Efectivo implements IEfectivo{
    valor : number;
    cantidad : number;
    constructor(valor : number, cantidad : number) {
        this.cantidad = cantidad;
        this.valor = valor;
    }
    cantidadDisponible() : void{
        console.log(`Hay ${this.cantidad} billetes de $${this.valor} pesos`)
    }
    gastoBilletes (cantidaGastada : number): void{
        this.cantidad = this.cantidad - cantidaGastada; 
    }
}
class Productos implements IProducto{
    private static contadorId = 1;
    id: number ;
    nombre : string;
    tipo : string;
    precio : number;
    marca : string;
    existencia : number;
    ventas: number = 0;
    
    constructor(nombre : string, tipo: string, precio : number, marca : string, existencia : number) {
        this.id = Productos.contadorId ++;
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
        this.marca = marca;
        this.existencia = existencia;
    }
    enExistencia(): number {
        return  this.existencia;
    }
    realizarCompra(): void {
        this.existencia --;
        this.ventas ++;
    }
    ventaProducto(): number {
        return this.ventas * this.precio;
    }
}
class MaquinaExpendedora {
    protected _dinero : Efectivo [] = [];
    protected _productos : Productos [] = [];
    
    agregarBilletes (dineroDisponible : Efectivo) : void{
        this._dinero.push(dineroDisponible);
    }
    agregarProducto (producto : Productos) : void{
        this._productos.push(producto);
    }
    mostrarProductos () : void{
        this._productos.forEach((p) => {
            console.log(`Id:${p.id} ${p.nombre} ${p.marca} - $${p.precio} en existencia: ${p.existencia}`);
        })
    }
    compraProducto(id: number, pago : number ) : void {
        const compra = this._productos.find(p => p.id === id);
        
        if (!compra || compra.existencia <= 0) {
            console.log("No es posible realizar la compra");
        }else{
            const  cambio : number = procesarPago(pago, compra.precio);
            switch (cambio) {
                case -1:
                    console.log(`No es posible realizar la compra faltan: ${compra.precio - pago}`);
                    break;
                case -2 : 
                    console.log(`No hay suficiente cambio disponible. Intenta con un pago exacto.`);
                default:
                    console.log(`Compra exitosa el cambio a dar es: ${cambio}`);
                    /* this._dineroDisponible += compra.precio; 
                    this._dineroDisponible -= cambio;   */
                    compra.realizarCompra();
                    break;
            }
        }
    }
    mostrarVentasTotales():void{
        let ventasTotales : number = 0;
         this._productos.forEach((p) => {
            console.log(`Id:${p.id} ${p.nombre} ${p.marca} - $${p.precio} ventas totales: ${p.ventaProducto()} pesos`);
            ventasTotales += p.ventaProducto();
        })
        console.log(`Las ventas totales son: ${ventasTotales} pesos`);
    }
    mostrarDineroDisponible () : void{
        let total : number = 0;
        this._dinero.forEach((b) => {
            b.cantidadDisponible();
            total = total + (b.cantidad * b.valor);
        })
        console.log(`La cantidad total es: ${total}`);
    }
}
function procesarPago (pago : number, precio : number) : number {
    let cambio = pago - precio;
    if (cambio < 0) {
        return -1;
    }
    /* if (cambio > dineroDisponible) {
        return -2
    } */
    return cambio ;
}
const maquinaService = new MaquinaExpendedora ();
const billeteCincuenta = new Efectivo (50,40);
const billeteCien = new Efectivo (100,40);
const billeteVinte = new Efectivo (20,40);
const billeteDoscientos = new Efectivo (200,40);
const billeteQuinientos = new Efectivo (500,40);
const monedaUno = new Efectivo (1,40);
const monedaDos = new Efectivo (2,40);
const monedaCinco = new Efectivo (5,40);
const monedaDiez = new Efectivo (10,40);
maquinaService.agregarBilletes(billeteCien);
maquinaService.agregarBilletes(billeteCincuenta);
maquinaService.agregarBilletes(billeteDoscientos);
maquinaService.agregarBilletes(billeteQuinientos);
maquinaService.agregarBilletes(billeteVinte);
maquinaService.agregarBilletes(monedaUno);
maquinaService.agregarBilletes(monedaDos);
maquinaService.agregarBilletes(monedaDiez);
maquinaService.agregarBilletes(monedaCinco);
const chicleBubalo = new Productos ('chicle', 'botana',3,'Bubalo', 20);
const papasSabritas = new Productos ('papas','botana',15,'Sabritas',30);
const jugoMango = new Productos ('Boing Mango', 'Jugo', 12,'Boing',20);
maquinaService.agregarProducto(chicleBubalo);
maquinaService.agregarProducto(papasSabritas);
maquinaService.agregarProducto(jugoMango);
//maquinaService.mostrarProductos();
maquinaService.compraProducto(1,30);
maquinaService.compraProducto(1,4);
maquinaService.compraProducto(1,3);
maquinaService.compraProducto(2,15);
maquinaService.compraProducto(2,30);
maquinaService.compraProducto(2,40);
maquinaService.compraProducto(3,31);
maquinaService.compraProducto(3,13);
maquinaService.compraProducto(3,20);
maquinaService.mostrarVentasTotales();
console.log(`Existencia de ${chicleBubalo.nombre} ${chicleBubalo.marca} es de: ${chicleBubalo.enExistencia()} y las ventas totales son de: ${chicleBubalo.ventaProducto()}`);
console.log(`Existencia de ${papasSabritas.nombre} ${papasSabritas.marca} es de: ${papasSabritas.enExistencia()} y las ventas totales son de: ${papasSabritas.ventaProducto()}`);
console.log(`Existencia de ${jugoMango.nombre} ${jugoMango.marca} es de: ${jugoMango.enExistencia()} y las ventas totales son de: ${jugoMango.ventaProducto()}`);
maquinaService.mostrarDineroDisponible();