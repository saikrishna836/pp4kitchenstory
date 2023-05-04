import { Component, OnInit, PipeTransform } from '@angular/core';
import { ServicesService } from '../services.service';
import { NgForm } from '@angular/forms';
import { Admindata } from 'src/datamodels/admindata.models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,PipeTransform{
   alerting=false
  navigate:boolean=false
  data: any;
 
  jsonObj: any = [];
  invalidAdmin=false
  cpassword=false
  constructor(private services: ServicesService) {}
  name = '';
  email = '';
  password = '';
  ngOnInit(): void {this.alerting=false}
  onLogin(form: NgForm) {
  this.data= this.services.onAdminValidate().subscribe((data) => {
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
message:string=''
  onCPasswordflag() {
    this.cpassword=true
  }
  change=false
  onCPassword(form:NgForm){
    this.data= this.services.onAdminValidate().subscribe((data) => {
      this.alerting=false
      this.jsonObj = this.transform(data);
      this.data = JSON.parse(this.jsonObj);
      console.log(this.data)

      console.log(this.data[0].password)
      console.log(form.value.rnewpassword)
      

      if(form.value.rnewpassword==form.value.newpassword&&this.data[0].password==form.value.oldpassword){
        this.data[0].password=form.value.newpassword
        this.change=true
      }
      else{
        this.alerting=true
      }
      if(this.change){
       this.data= this.services.onPasswordChange({"id":this.data[0].id,"email":this.data[0].email,"password":this.data[0].password})
        console.log("bek"+this.data)
      }
      form.reset()
  })
}
  transform(value: any): string {
    return JSON.stringify(value, null, 2);
  }
  
}
