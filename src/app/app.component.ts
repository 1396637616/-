import { Component , ViewChild } from '@angular/core';
import { ChildComponent } from "./components/child.component"
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    @ViewChild(ChildComponent) childInfo2:ChildComponent
    constructor(private http:HttpClient){
    	
    }
	  ngOnInit(){
	  //console.log(this.childInfo)
	  	console.log(this.childInfo2)
//	  	this.http.get("http://datainfo.duapp.com/shopdata/getclass.php").subscribe(data=>{
//	  		console.log(data)
//	  	})
        this.http.jsonp("http://datainfo.duapp.com/shopdata/getGoods.php?classID=1","callback").subscribe(data=>{
        	console.log(data)
        })
	  }
   names = ["卑鄙","大方","帅","有钱","好"]
   
}
