import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../../services/phone.service';
import { Phone } from '../../../interfaces/phone';

@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css']
})

export class AddPhoneComponent implements OnInit {

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
  }

  addPhone(phone: Phone) {
    let response = this.phoneService.addPhone(phone);
  }

}
