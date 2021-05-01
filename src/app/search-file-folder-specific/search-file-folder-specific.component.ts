import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-search-file-folder-specific',
  templateUrl: './search-file-folder-specific.component.html',
  styleUrls: ['./search-file-folder-specific.component.css']
})
export class SearchFileFolderSpecificComponent implements OnInit {

  @Input() indexFolder :string;
  show: boolean = false;
  records:any=[];
  folderNameObject: FileStatsInput;
  model:SearchAFileFolderInCompleteViewModel = {
    fileFolderToSearch : ''
  }

  ngOnChanges(changes: SimpleChanges) :void {
        for (let property in changes) {
            if (property === 'indexFolder') {
              console.log('Previous:', changes[property].previousValue);
              console.log('Current:', changes[property].currentValue);
              console.log('firstChange:', changes[property].firstChange);
            } 
        }
    }
  
  constructor(private http: HttpClient) { }

  sendIndexFolderToBackEnd(): void
  {
    this.folderNameObject = new FileStatsInput(this.indexFolder,this.model.fileFolderToSearch); 
    let url :string = 'http://localhost:8080/searchFileFolderSpecific';
    console.log("not done");
    this.http.post(url ,this.folderNameObject).subscribe({
    next: (data) => {console.log("done");this.records = data;this.show=true;},
    error: error => console.error('There was an error!', error)
    })
  }

  ngOnInit(): void {
  }

}

export class FileStatsInput{
  folderCarryingSearch: string;
  fileFolderToSearch :string;
  constructor ( folderName: string, fileSearchName : string)
  {
    this.folderCarryingSearch = folderName;
    this.fileFolderToSearch = fileSearchName;
  }
}

export interface SearchAFileFolderInCompleteViewModel{
  fileFolderToSearch :string;
}