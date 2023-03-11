import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer/customer';


@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl: string = 'http://localhost:8080/customer/list';

  constructor(private _httpClient: HttpClient) {}

  getCustomers(): Observable<Customer[]> {
    return this._httpClient
      .get<Customer[]>(this.baseUrl)
      .pipe(map((response) => response));
  }

}
