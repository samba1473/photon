import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }
  public url="https://data.cityofnewyork.us/resource/s3k6-pzi2.json";

  getData(){
    return this.http.get(this.url)

  }

}
