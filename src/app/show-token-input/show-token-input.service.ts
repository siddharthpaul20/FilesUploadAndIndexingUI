import { FileInput } from './../file-input/file-input';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowTokenInputService {

  
  url = "http://localhost:8080/getTokens";
  constructor(private http:HttpClient) { }
  getTokensFromBackEnd():Observable<FileInput[]>{
    return this.http.get<any[]>(this.url);
    };
}
