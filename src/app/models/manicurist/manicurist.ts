import { LocalDate } from "@js-joda/core";

export interface Manicurist {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  hireDate: LocalDate;
}
