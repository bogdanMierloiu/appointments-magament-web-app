import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer';
import { throwError } from 'rxjs';
import { LocalDate } from '@js-joda/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl: string = 'http://localhost:8080/customer/list';

  constructor(private _httpClient: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this._httpClient.get<GetResponse>(this.baseUrl).pipe(
      map((response) => {
        return response._embedded.customers.map((customer) => ({
          ...customer,
          birthDate: LocalDate.parse(customer.birthDate),
        }));
      })
    );  
  }
}
interface GetResponse {
  _embedded: {
    customers: {
      id: number;
      firstName: string;
      lastName: string;
      phoneNumber: string;
      birthDate: string;
      email: string;
      active: boolean;
    }[];
  };
}
