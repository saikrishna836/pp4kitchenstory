import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{
item='';
count=0;
cost=0;
payableamount=0
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.item = params['item'];
      this.count=params['count'];
      this.cost=params['cost'];
      this.payableamount=this.count*this.cost
      console.log(this.payableamount)
    });
  }
  success=false
  onPay(){
    this.success=true
  }
}
