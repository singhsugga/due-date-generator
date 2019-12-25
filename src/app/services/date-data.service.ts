import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class DateDataService {

  generatedDate = []
  holiDay = []
  Day = [
    'Tue Dec 28 2019 18:16:43 GMT+0530',
    'Tue Jan 31 2020 18:16:43 GMT+0530',
    'Tue Jan 14 2020 18:16:43 GMT+0530',
  ]
  constructor() {
    this.Day.forEach((date) => {
      this.holiDay.push(moment(date).format('MM/DD/YYYY'));
    });
    console.log(this.holiDay)
  }



  dateGenerator(startDate: any, occurance, frequency) {

    this.generatedDate = [];
    let currentDate = startDate;
    if (frequency === "one-time") {
      if (this.isHoliday(currentDate, this.holiDay) == 1) {
        this.generatedDate.push(this.nextDate(currentDate));
      }
      else {
        this.generatedDate.push(currentDate);
      }
    }
    else {
      for (let i = 0; i < occurance; i++) {
        if (this.isHoliday(currentDate, this.holiDay) == 1) {
          let next = this.nextDate(currentDate);
          this.generatedDate.push(next);
          if (frequency == 'd') {
            currentDate = moment(next).add(1, 'd').toString();
          }
          else {
            currentDate = moment(currentDate).add(1, frequency).toString();
          }
        }
        else {
          this.generatedDate.push(currentDate)
          let x = moment(currentDate).add(1, frequency).toString()
          currentDate = x;
        }
      }

    }

  }






  isHoliday(dateToCheck: any, holidayLists: any) {
    if (moment(dateToCheck).weekday() == 0 || moment(dateToCheck).weekday() == 6) {

      return 1;
    }
    else if (holidayLists.includes(moment(dateToCheck).format('MM/DD/YYYY'))) {
      return 1;
    }
    else {
      return 0;
    }
  }

  nextDate(date) {

    if (this.isHoliday(date, this.holiDay) != 1) {
      return date;
    }


    return this.nextDate(moment(date).add(1, 'd').format('MM/DD/YYYY'))

  }
}


