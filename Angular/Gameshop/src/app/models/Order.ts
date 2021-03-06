import { OrderItem } from './OrderItem';

export class Order {
  public invoiceNumber: number;
  public email: string;
  public total: number;
  public items: OrderItem[];
  public shippingAddress: string;
  public orderDate: Date;
  public promiseDate: Date;
  constructor(
    invoiceNumber: number,
    email: string,
    total: number,
    items: OrderItem[]
  ) {
    this.invoiceNumber = invoiceNumber;
    this.email = email;
    this.total = total;
    this.items = items;
  }

  //Set order dates to match current time when order placed
  setDates() {
    //Set order date tp current date
    this.orderDate = new Date(Date.now());
    //Set promise date to five days in the future,
    //adding milliseconds
    this.promiseDate = new Date(
      Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 5
    );
  }
}
