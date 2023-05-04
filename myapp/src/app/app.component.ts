import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private route: Router) {}
  topic:string='admin';
  value:any;
 status:boolean=true;
 adminstatus:boolean=false;
 userstatus:boolean=false;
  ngOnInit(): void {
    this.route.events.subscribe(
      
      (val)=>{
        console.log("heer")
        if(val instanceof NavigationEnd){
          console.log(val.url)

            if(val.url=='/ulogin'||val.url=='/alogin'||val.url==''||val.url=='/app'){
              console.log("heer2")

              this.status=true;
              console.log(this.status)
            }else{
              this.status=false
            }
            if(val.url=='/alogin/home/contact'||val.url=='/home/contact'){
              this.adminstatus=true;
            }else{
              this.adminstatus=false;
            }
           
        }
      }

    )
  }
  
}
