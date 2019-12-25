import { DateDataService } from './../../services/date-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-container',
  templateUrl: './output-container.component.html',
  styleUrls: ['./output-container.component.scss']
})
export class OutputContainerComponent implements OnInit {

  constructor(public dateService: DateDataService) {}

  ngOnInit() {
  }

}
