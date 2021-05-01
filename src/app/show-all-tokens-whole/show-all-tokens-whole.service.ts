import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowAllTokensWholeService {

  url = "http://localhost:8080/getAllTokensWhole";

  constructor(private http:HttpClient) { }
  getAllTokensFromBackEndServiceMethod():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
