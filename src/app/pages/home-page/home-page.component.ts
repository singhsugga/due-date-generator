import { Component, OnInit,TemplateRef  } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DateDataService } from './../../services/date-data.service';
import * as moment from 'moment';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  modalRef: BsModalRef;
  holidayValue=new Date();
  constructor(private modalService: BsModalService,private dateService:DateDataService) { }

  ngOnInit() {
  }
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  addHoliday(){
    if(this.dateService.holiDay.includes(moment(this.holidayValue).format('MM/DD/YYYY'))){
      alert('This Date is already in Holiday Calander')
      this.modalRef.hide()
    }
    else{
      this.dateService.holiDay.push(moment(this.holidayValue).format('MM/DD/YYYY'));
      alert('Holiday added to Calander')
      this.modalRef.hide()
    }
  }

}
