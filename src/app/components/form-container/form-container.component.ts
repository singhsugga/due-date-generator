import { DateDataService } from './../../services/date-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {
  frequencySelected: any = null;
  occuranceNumber: any = 1;  //(this.frequencySelected === 'one-time') ? 1 : 1
  bsValue = new Date(); //start date

  frequencyTypes = [
    { name: 'Daily', value: 'd' },
    { name: 'Weekly', value: 'w' },
    { name: 'Monthly', value: 'M' },
    { name: 'Yearly', value: 'y' },
    { name: 'One Time', value: 'one-time' }
  ]
  constructor(public dateService: DateDataService) {}
  

  ngOnInit() {
  }

  generateDate() {
    this.dateService.dateGenerator(this.bsValue, this.occuranceNumber, this.frequencySelected);
  }
}
