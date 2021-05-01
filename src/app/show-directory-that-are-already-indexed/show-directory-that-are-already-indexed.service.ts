import { Directory } from './directory';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowDirectoryThatAreAlreadyIndexedService {
  url = "http://localhost:8080/getAllIndexedDirectories";

  constructor(private http:HttpClient) { }
  getAllDirectoriesFromBackEndServiceMethod():Observable<Directory[]>{
    return this.http.get<Directory[]>(this.url);
  }

}
