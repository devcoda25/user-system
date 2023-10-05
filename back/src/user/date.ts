import { Injectable } from '@nestjs/common';

@Injectable()
export class DateService {
  convertDateStringToDate(dateString: string): Date {
    return new Date(Date.parse(dateString));
  }
}
