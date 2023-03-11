import { LocalDate } from '@js-joda/core';

export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  birthDate: LocalDate;
  email: string;
  active: boolean;
}

