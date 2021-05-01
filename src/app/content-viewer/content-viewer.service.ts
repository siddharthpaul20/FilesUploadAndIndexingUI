import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentViewerService {

  url: string = "http://localhost:8080/getFileContent";
  constructor(private http : HttpClient) { }

  getContentFromBackEnd():Observable<any[]>
  {
    return this.http.get<any[]>(this.url);
  }
}
