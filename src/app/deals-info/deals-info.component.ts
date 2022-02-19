import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from './customer-names/customer.model';
import { DealsInfoService } from './deals-info.service';

@Component({
  selector: 'app-deals-info',
  templateUrl: './deals-info.component.html',
  styleUrls: ['./deals-info.component.css']
})
export class DealsInfoComponent implements OnInit {
  customers!: Customer;
  @ViewChild("customerName", {static: false}) customerInputRef!: ElementRef;

  constructor(private dealsinfoService: DealsInfoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void { }

  onSubmit(){
    // let customerName = this.customerInputRef.nativeElement.value;
    // this.dealsinfoService.addCustomer(customerName);
    // this.router.navigate(['customer-names'], {relativeTo: this.route});
    this.dealsinfoService.addCustomer(this.customers)
  }

}
