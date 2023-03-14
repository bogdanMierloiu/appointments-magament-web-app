import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerRequest } from 'src/app/models/customer/add-customer';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  customerToAdd!: CustomerRequest;

  constructor(
    private _customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerToAdd = new CustomerRequest();
  }

  addCustomer(): void {
    this._customerService.addCustomer(this.customerToAdd).subscribe({
      next: () => {
        console.log('Customer added successfuly');
        this.router.navigate(['/customers']);
      },
      error: (error) => {
        console.error('Error adding nails care: ', error);
      },
    });
  }
}
