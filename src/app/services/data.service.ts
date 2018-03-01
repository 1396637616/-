import {  Injectable }  from "@angular/core"
import {PERSONS} from "../mockdata/mock.data"
@Injectable()
export class DataService {
	getPersons(){
		return PERSONS
	}
}
