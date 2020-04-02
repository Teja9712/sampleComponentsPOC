import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildTwoComponent } from './child-two/child-two.component';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements AfterViewInit {

  messageFromService: string;
  fromChildOne: string;
  show: boolean = false;
  messageOne: string;
  messageFromTwo: string;

  @ViewChild(ChildTwoComponent,{ static: false }) childTwo;
 
  constructor( private ds: DataService) { 
    this.ds.currentMessage.subscribe(data => {
        this.messageFromService = data;
    });
  }

  
    ngAfterViewInit(){
      this.messageFromTwo = this.childTwo.forViewChild();
      this.show = true;
   }
  
  

  receivedMessage(e){
    this.show = true;
    this.fromChildOne = e;
    this.messageOne = e;
}

changeDataAccrossComponent(){
  this.ds.changeMessage('changed from first component');
}

}
