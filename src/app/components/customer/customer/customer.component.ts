import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/models/customer/customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private _customerService: CustomerService) {}

  ngOnInit(): void {
    this.listCustomers();
  }

  listCustomers() {
    this._customerService.getCustomers().subscribe(
      (data) => {
      this.customers = data;
    })
  }
}
