import { Component, OnInit, PipeTransform } from '@angular/core';
import { Admindata } from 'src/datamodels/admindata.models';
import { ServicesService } from '../services.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,PipeTransform{
  
  navigate:boolean=false
  data: any;
  jsonObj: any = [];
  invalidAdmin=false
  cpassword=false
  alerting=false
  constructor(private services: ServicesService) {}
  name = '';
  email = '';
  password = '';
  ngOnInit(): void {}
  onLogin(form: NgForm) {
  this.data= this.services.onUserValidate().subscribe((data) => {
    this.jsonObj = this.transform(data);
    this.data = JSON.parse(this.jsonObj);
    console.log(this.data[0].email)
    console.log(form.value.email)
    if(this.data[0].email==form.value.email&&this.data[0].password==form.value.password){
      this.navigate=true
    }
    else{
      this.alerting=true
    }
    form.reset()
    
  },(error)=>{
  console.log(error)
  }
  );
   
   
  }
  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
}
