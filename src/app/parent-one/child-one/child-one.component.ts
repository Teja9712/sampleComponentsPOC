import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  messageChildOne: string =  'from 1 child' ;
  @Output() sendData = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendingDataTwoChildTwo(){
     this.sendData.emit(this.messageChildOne);
  }

}
