import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer-names',
  templateUrl: './customer-names.component.html',
  styleUrls: ['./customer-names.component.css']
})
export class CustomerNamesComponent implements OnInit {
  customers: Customer[] = [ ];

  constructor() { }

  ngOnInit(): void { }

}
