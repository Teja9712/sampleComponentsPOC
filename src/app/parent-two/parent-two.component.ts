import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-parent-two',
  templateUrl: './parent-two.component.html',
  styleUrls: ['./parent-two.component.css']
})
export class ParentTwoComponent implements OnInit {

  message: string;
  constructor( private ds: DataService) { }

  ngOnInit() {
    this.ds.currentMessage.subscribe(data => {
      this.message = data;
   });
  }

  changeDataAccrossComponent(){
    console.log('yes................');
    this.ds.changeMessage('changed from parent two component');
  }
}


