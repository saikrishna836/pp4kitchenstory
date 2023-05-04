import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  item:{
    id:number,
    itemtype:string
    item:string,
    count:number,
    cost:number,
    category:string,

  }={
    id: 0,
    itemtype: '',
    item: '',
    count: 0,
    cost: 0,
    category: ''
  }
  items:any=[]
  
  constructor(private services:ServicesService){}
  ngOnInit() {
    fetch('http://localhost:3000/items')
  .then((response) => response.json())
  .then((json) => this.items=json);
    for(let item in this.items){
      console.log(item)
    }

  }

  addItem(form:NgForm){
    this.services.onaddItem(form)
    form.reset()
    fetch('http://localhost:3000/items')
  .then((response) => response.json())
  .then((json) => this.items=json);
  }
  onDelete(form:NgForm){
    fetch('http://localhost:3000/items/'+form.value.id, {
  method: 'DELETE',
 
  })
  form.reset()
fetch('http://localhost:3000/items')
  .then((response) => response.json())
  .then((json) => this.items=json );
    for(let item in this.items){
      console.log(item)
    }
  }
}
