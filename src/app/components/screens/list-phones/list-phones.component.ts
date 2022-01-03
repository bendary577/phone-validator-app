import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../../services/phone.service';
import { Phone } from '../../../interfaces/phone';

@Component({
  selector: 'app-list-phones',
  templateUrl: './list-phones.component.html',
  styleUrls: ['./list-phones.component.css']
})

export class ListPhonesComponent implements OnInit {
  phones: Phone[] =
   [];
  message : string 
  loading : boolean = false;

  constructor(private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.loading = true;
    this.phones = this.phoneService.getPhones()
    this.loading = false;
  }

}
