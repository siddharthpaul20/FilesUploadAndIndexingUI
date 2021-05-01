import { HttpClient } from '@angular/common/http';
import { FileInput } from './file-input';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Directory } from '../show-directory-that-are-already-indexed/directory';

@Injectable({
  providedIn: 'root'
})
export class FileInputService 
{
  url = "http://localhost:8080/getTokens";
  url2= "http://localhost:8080/getAllDirectoriesOfDdrive";

  constructor(private http:HttpClient) { }
  getBookFromStore():Observable<FileInput[]>
  {
      return this.http.get<any[]>(this.url);
  }

  getAllFoldersFromDdriveServiceMethod():Observable<Directory[]>{
    return this.http.get<Directory[]>(this.url2);
  }
  
}
