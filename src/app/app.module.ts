import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildOneComponent } from './parent-one/child-one/child-one.component';
import { ChildTwoComponent } from './parent-one/child-two/child-two.component';
import { ParentOneComponent } from './parent-one/parent-one.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { DataService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ParentOneComponent,
    ParentTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
