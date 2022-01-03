import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import {Phone} from '../../../interfaces/phone';

@Component({
  selector: 'app-add-phone-form',
  templateUrl: './add-phone-form.component.html',
  styleUrls: ['./add-phone-form.component.css']
})

export class AddPhoneFormComponent implements OnInit {

  @Output() onAddPhone: EventEmitter<Phone> = new EventEmitter();
  number: string;
  message : string;
  showAlert : boolean = false;
  showSuccess : boolean = false;
  subscription: Subscription;
  
  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    let regex = new RegExp(`^[0-9]*$`)
    if(!this.number) {
      this.message = "please enter a phone number"
      this.showAlert = true;
      this.showSuccess = false
      return;
    }else if(!regex.test(this.number)){
      this.message = "please enter a valid phone number"
      this.showAlert = true;
      this.showSuccess = false;
      return;
    }else if(this.number.length != 11) {
      this.message = "phone number length must be 11 digits"
      this.showAlert = true;
      this.showSuccess = false;
      return;
    }else{
      this.showAlert = false
    }

    const newPhone: Phone = {
      number: this.number,
    };

    this.onAddPhone.emit(newPhone);
    this.showSuccess = true;
    this.message = "phone added successfully"
    this.number = '';
  }

}
