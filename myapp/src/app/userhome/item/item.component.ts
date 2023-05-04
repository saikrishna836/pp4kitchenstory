import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
  export class ItemComponent {
    @Input('item')
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
    @Input('item1')
    item1:{
     
      itemtype:string
      
      count:number,
      
      category:string,
      above:number,
      below:number
  
    }={
      itemtype: '',
      count: 0,
      category: '',
      above: 0,
      below: 0
    }

}
