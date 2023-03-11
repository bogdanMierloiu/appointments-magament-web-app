import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateTimeFormatter, LocalDate, LocalDateTime } from '@js-joda/core';
import { Appointment } from 'src/app/models/appointment/appointment';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private _appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.listAppointments();
  }

  listAppointments() {
    this._appointmentService.getAppointments().subscribe(
      data => {
        this.appointments = data;
      }
    )
  }
 

}
