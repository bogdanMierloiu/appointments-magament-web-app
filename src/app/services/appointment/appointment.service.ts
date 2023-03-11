import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment/appointment';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private baseUrl: string = 'http://localhost:8080/appointment/list';

  constructor(private _httpClient: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this._httpClient
      .get<Appointment[]>(this.baseUrl)
      .pipe(map((response) => response));
  }
  
}
