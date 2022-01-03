import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Phone } from '../interfaces/phone';
import {baseUrl, addPhoneUrl, getPhonesUrl} from '../API/API';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }),
};

@Injectable({
  providedIn: 'root'
})

export class PhoneService {

  constructor(private http: HttpClient) { }

  getPhones() : Phone[]{
    let phones : Phone[] = [];
    this.http.get(baseUrl+getPhonesUrl, { observe: 'response' }).pipe(map((resp : any)=>{
      for(let key in resp.body.data){
        phones.push(resp.body.data[key])
      }
    })).subscribe()
    return phones;
  }

  addPhone(phone: Phone) {
    let data = {
      number : phone.number
    }
    let response : Response ; 
    this.http.post<{ number: string }>(baseUrl+addPhoneUrl, data, httpOptions).pipe(map((resp : any)=>{
      console.log(resp.status)
    })).subscribe()
  }

}
