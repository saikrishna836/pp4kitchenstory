import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from 'src/datamodels/item.model';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent {
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
  items1:Item[]=[]
  items:Item[]=[]
  item1:{
    itemtype:string,
    category:string,
    above:number,
    below:number,
    count:number
  }={
    itemtype: '',
    category: '',
    above: 0,
    below: 0,
    count: 0
  }
  search=false
filteredStatus: string='';
  onSearch(form:NgForm){
  this.search=true
  this.item1=form.value
   fetch('http://localhost:3000/items')
  .then((response) => response.json())
  .then((json) => this.items=json );
   }
  }

