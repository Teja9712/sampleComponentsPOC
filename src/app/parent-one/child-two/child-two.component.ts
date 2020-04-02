import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  constructor() { }
  @Input() fromOneChild: string;
  ngOnInit() {

  }

  forViewChild(){
     return 'from 2 child component and display in parent One.. Using View child';
  }


  

}
