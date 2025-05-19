/* Abierto la extension cerrado a la modificación */
/* class Order {
  private lineItems: any[];
  private shipping: string;

  constructor(lineItems: any[], shipping: string) {
    this.lineItems = lineItems;
    this.shipping = shipping;
  }

  getTotal(): number {
    // Lógica para calcular el total
    return 100; // ejemplo
  }

  getShippingCost(): number {
    if (this.shipping === "ground") {
      if (this.getTotal() > 100) {
        return 0;
      }
      return Math.max(10, this.getTotal() * 0.1);
    } else if (this.shipping === "air") {
      return Math.max(20, this.getTotal() * 0.25);
    }
    return 0;
  }
}
 */
//  Open/Close => Principio Aplicado
interface Shipping {
    getCost(order: Order): number;
}

class GroundShipping implements Shipping {
   getCost(order: Order): number {
     if (order.getTotal() > 100) {
       return 0;
     }
     return Math.max(10, order.getTotal() * 0.1);
   }
}

class AirShipping implements Shipping {
  getCost(order: Order): number {
    return Math.max(20, order.getTotal() * 0.25);
  }
}

class Order {
  private lineItems: any[];
  private shipping: Shipping;
   constructor(lineItems: any[], shipping: Shipping) {
    this.lineItems = lineItems;
    this.shipping = shipping;
  }
   getTotal(): number {
    // Lógica para calcular el total
    return 100; // ejemplo
  }
  getShippingCost(): number {
    return this.shipping.getCost(this);
  }
}

// Uso
const groundShipping = new GroundShipping();
const order = new Order([], groundShipping);
console.log(order.getShippingCost());