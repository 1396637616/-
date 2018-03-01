import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/child.component'
import { HttpModule } from "@angular/http"
import {Datas} from './components/appdata.component'
import {DataList} from './components/appdatalist.component'
@NgModule({
  declarations: [
    AppComponent,ChildComponent,Datas,DataList
  ],
  imports: [
BrowserModule,HttpModule,HttpClientModule,HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
