import { EventEmitter, Injectable } from "@angular/core";
import { Customer } from "./customer-names/customer.model";

@Injectable({
  providedIn: 'root'
})
export class DealsInfoService{
  customersChanged = new EventEmitter<Customer[]>();
  customers: Customer[] = [];

  constructor(){  }

  addCustomer(customer: Customer){
    this.customers.push(customer);
    this.customersChanged.emit(this.customers.slice());

  }
}
