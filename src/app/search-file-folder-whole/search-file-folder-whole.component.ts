import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-file-folder-whole',
  templateUrl: './search-file-folder-whole.component.html',
  styleUrls: ['./search-file-folder-whole.component.css']
})
export class SearchFileFolderWholeComponent implements OnInit {
  show: boolean = false;
  model:SearchAFileFolderInCompleteViewModel = {
    fileFolderToSearch : ''
  }
  records:any=[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  say() :void
  {
    console.log("done");
  }

  sendFileFolderToBackend() : void
  {
    alert(this.model.fileFolderToSearch);
    let url = "http://localhost:8080/searchFileFolderInComplete";
    console.log("not done");
    this.http.post(url, this.model ).subscribe({
    next: (data) => {console.log("done");this.records = data;this.show=true;},
    error: error => console.error('There was an error!', error)
    })
  }

}

export interface SearchAFileFolderInCompleteViewModel{
  fileFolderToSearch :string;
}