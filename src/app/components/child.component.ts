import { Component, Input } from "@angular/core"
@Component({
	selector:"a-child",
	template:`
	 <h2>{{_neihan}}</h2>
	`
})


export class ChildComponent {
	info:string = "这是子组件"
	save(){
		console.log("世界那么大 我要去看看")
	}
	private _neihan = "还没有获取到父组件的信息"
	@Input() 
	  set neihan(neihan:string){
	  	if(neihan == "帅"){
	  		this._neihan = "你是一个大大的好人"
	  	}else{
	  		this._neihan = neihan
	  	}
	  }
	  get neihan(){
	  	return this._neihan
	  }
	
//	ngOnInit(){
//		this.info = this.neihan
//	}
}
