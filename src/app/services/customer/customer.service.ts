import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CustomerRequest } from 'src/app/models/customer/add-customer';
import { Customer } from 'src/app/models/customer/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl: string = 'http://localhost:8080/customer';

  constructor(private _httpClient: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this._httpClient
      .get<Customer[]>(`${this.baseUrl}/list`)
      .pipe(map((response) => response));
  }

  addCustomer(customer: CustomerRequest): Observable<CustomerRequest> {
    return this._httpClient.post<CustomerRequest>(
      `${this.baseUrl}/create`,
      customer
    );
  }
}
