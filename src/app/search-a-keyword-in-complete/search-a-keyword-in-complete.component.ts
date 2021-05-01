import { SearchAKeywordInCompleteService } from './search-a-keyword-in-complete.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-a-keyword-in-complete',
  templateUrl: './search-a-keyword-in-complete.component.html',
  styleUrls: ['./search-a-keyword-in-complete.component.css']
})
export class SearchAKeywordInCompleteComponent implements OnInit {
  model:SearchAKeywordInCompleteViewModel = {
    keywordToSearch : ''
  }
  show :boolean =false;
  records:any=[];

  constructor(private http: HttpClient,private searchAKeywordInComplete: SearchAKeywordInCompleteService) { }

  ngOnInit(): void {
  }

  sendKeywordToBackEnd(): void
  {
    alert(this.model.keywordToSearch);
    let url = "http://localhost:8080/searchAKeywordInComplete";
    console.log("not done");
    this.http.post(url, this.model ).subscribe({
    next: (data) => {console.log("done");this.records = data;this.show =true;},
    error: error => console.error('There was an error!', error)
    })
  }

}

export interface SearchAKeywordInCompleteViewModel{
  keywordToSearch :string;
}