import { SearchAKeywordInComplete } from './../search-a-keyword-in-complete/search-a-keyword-in-complete';
import { FileInput } from './../file-input/file-input';
import { ShowTokenInputService } from './show-token-input.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-token-input',
  templateUrl: './show-token-input.component.html',
  styleUrls: ['./show-token-input.component.css']
})
export class ShowTokenInputComponent implements OnInit {
  model:ShowTokenViewModel = {
    folderToIndex:''
  }
  show: boolean = false;
  records:any=[];
  constructor(private http: HttpClient,private showTokenInputService: ShowTokenInputService) { }

  ngOnInit(): void {
  }

  sendTokenToBackEnd(): void{
    alert(this.model.folderToIndex);
    let url = "http://localhost:8080/getTokens";
    console.log("not done");
    this.http.post(url, this.model ).subscribe({
    next: (data) => {console.log("done");this.records = data; this.show =true},
    error: error => console.error('There was an error!', error)
  })
}

}

export interface ShowTokenViewModel{
  folderToIndex :string;
}