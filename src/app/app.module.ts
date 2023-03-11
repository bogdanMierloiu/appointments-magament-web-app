import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer/customer.component';
import { ManicuristComponent } from './components/manicurist/manicurist/manicurist.component';
import { NailsCareComponent } from './components/nails-care/nails-care.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { AppointmentService } from './services/appointment/appointment.service';
import { ManicuristService } from './services/manicurist/manicurist.service';
import { CustomerService } from './services/customer/customer.service';
import { NailsCareService } from './services/nails-care/nails-care.service';

const routes: Routes = [
  { path: 'customers', component: CustomerComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: '**', redirectTo: '/customers', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ManicuristComponent,
    NailsCareComponent,
    AppointmentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(routers),
    FormsModule,
  ],
  providers: [
    AppointmentService,
    ManicuristService,
    CustomerService,
    NailsCareService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
