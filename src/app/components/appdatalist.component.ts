import { Component } from "@angular/core"
//import { PERSONS } from "../mockdata/mock.data"
import {DataService} from "../services/data.service"
@Component({
	selector:"app-data-list",
	providers:[DataService],
	template:`
	  <div *ngFor = "let person of persons">
	    <p style="color:deepskyblue;">{{person.name}}</p>
	  </div>
	`
})
export class DataList{
//	persons = PERSONS
  private persons;
  constructor(private dataService:DataService){
  this.persons = dataService.getPersons()
  }
}
