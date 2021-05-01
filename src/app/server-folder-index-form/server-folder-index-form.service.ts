import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Directory } from '../show-directory-that-are-already-indexed/directory';

@Injectable({
  providedIn: 'root'
})
export class ServerFolderIndexFormService {

  url2= "http://localhost:8080/getAllDirectoriesOfDdrive";

  constructor(private http:HttpClient) { }

  getAllFoldersFromDdriveServiceMethod():Observable<Directory[]>{
    return this.http.get<Directory[]>(this.url2);
  }

}
