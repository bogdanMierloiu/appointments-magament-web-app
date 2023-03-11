import { LocalDateTime } from '@js-joda/core';
import { CustomerResponse } from '../customer/customer-for-appointments';
import { ManicuristResponse } from '../manicurist/manicurist-for-appointments';
import { NailsCareResponse } from '../nails-care/nails-for-appointments';

export interface Appointment {
  id: number;
  appointmentDateTime: LocalDateTime;
  manicurist: ManicuristResponse;
  customer: CustomerResponse;
  nailsCares: NailsCareResponse;
}
