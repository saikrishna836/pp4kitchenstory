import { HttpClient } from '@angular/common/http';
import { Injectable, PipeTransform } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Subscription,  interval } from 'rxjs';
import { Admindata } from 'src/datamodels/admindata.models';


@Injectable({
  providedIn: 'root'
})
export class ServicesService  {
  constructor(private httpClient: HttpClient) {}
  data: any;
  jsonObj: any = [];
  topic='admin'
  onAdminValidate() {

    return this.httpClient.get('http://localhost:3000/' + this.topic)
    
  }
  onUserValidate() {

    return this.httpClient.get('http://localhost:3000/user')
    
  }
  onPasswordChange(admin:Admindata){
   return fetch('http://localhost:3000/admin/1', {
      method: 'PUT',
      body: JSON.stringify(admin),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => json)
      
  }
  onaddItem(form:NgForm){
    console.log(form.value)
    fetch('http://localhost:3000/items', {
  method: 'POST',
  body: JSON.stringify(form.value),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  }
 onfetchItems(){
  fetch('http://localhost:3000/items')
  .then((response) => response.json())
  .then((json) => json);
 }
}

