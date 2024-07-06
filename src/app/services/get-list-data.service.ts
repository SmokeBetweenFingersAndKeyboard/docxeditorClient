import {Injectable, NgModule} from '@angular/core';
import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})


export class GetListDataService {

  url = 'http://localhost:4300/';
  constructor(private http: HttpClient) {
    console.log(this.http.get('https://jsonplaceholder.typicode.com/users'));
  }
}

