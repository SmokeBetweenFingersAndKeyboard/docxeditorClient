import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from "rxjs"

@Injectable({
  providedIn: 'root'
})


export class GetListDataService {

  constructor(private http: HttpClient) {}
  getProducts():Observable<any>{
    const url = 'http://localhost:4300';
    return this.http.get<any>(url);
  }

}

