import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowFileStatsService {
  url :string = 'http://localhost:8080/getFileStats';

  constructor(private http:HttpClient) { }

}
