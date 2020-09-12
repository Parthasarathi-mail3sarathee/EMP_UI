import { Component, Input, OnChanges, SimpleChange } from '@angular/core';


@Component({
  selector: 'emp-msg',
  templateUrl: './emp.msg.component.html',
  styleUrls: ['./emp.msg.component.sass']
})
export class empMessage implements OnChanges {
    @Input() messageEle: string;
    isShown: boolean = false ; 
  constructor() { 
      
    console.log("this is trigered");
  }

  ngOnChanges() {
   
    console.log("this is ngOnChanges");
    console.log(this.messageEle);
    console.log(this.isShown);
    if(this.messageEle=="Success")
    {
        this.isShown = true; 
    }
  }

  

  
 

}