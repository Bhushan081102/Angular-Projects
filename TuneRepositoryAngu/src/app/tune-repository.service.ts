import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TuneRepositoryService {

  constructor(private http:HttpClient) { }

  getSchools(){
    return this.http.get("http://localhost:8090/alldetails");
  }
}
