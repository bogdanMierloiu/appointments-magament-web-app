import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Appointment } from 'src/app/models/appointment/appointment';
import { CustomerResponse } from 'src/app/models/customer/customer-for-appointments';
import { ManicuristResponse } from 'src/app/models/manicurist/manicurist-for-appointments';
import { NailsCareResponse } from 'src/app/models/nails-care/nails-for-appointments';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private baseUrl: string = 'http://localhost:8080/appointment/list';

  constructor(private _httpClient: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    return this._httpClient.get<Appointment[]>(this.baseUrl).pipe(
      map((appointments) =>
        appointments.map((appointment) => {
          // Map the manicurist object to include the fullName property
          const manicurist: ManicuristResponse = {
            ...appointment.manicurist,
            fullName: `${appointment.manicurist.firstName} ${appointment.manicurist.lastName}`,
          };

          // Map the customer object to include the fullName property
          const customer: CustomerResponse = {
            ...appointment.customer,
            fullName: `${appointment.customer.firstName} ${appointment.customer.lastName}`,
          };

          // Map the nails cares array to include the name property for each nails care
          const nailsCares: NailsCareResponse[] = appointment.nailsCares.map(
            (nailsCare) => {
              return {
                ...nailsCare,
                name: nailsCare.serviceName
              };
            }
          );

          // Return the updated appointment object
          return {
            ...appointment,
            manicurist,
            customer,
            nailsCares,
          };
        })
      )
    );
  }
}
