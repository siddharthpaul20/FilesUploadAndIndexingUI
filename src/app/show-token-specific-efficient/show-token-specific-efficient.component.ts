import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-show-token-specific-efficient',
  templateUrl: './show-token-specific-efficient.component.html',
  styleUrls: ['./show-token-specific-efficient.component.css']
})
export class ShowTokenSpecificEfficientComponent implements OnInit {

  @Input() indexFolder :string;
  records:any=[];
  model: FileStatsInput;

  ngOnChanges(changes: SimpleChanges) :void {
        this.sendIndexFolderToBackEnd();
        for (let property in changes) {
            if (property === 'count') {
              console.log('Previous:', changes[property].previousValue);
              console.log('Current:', changes[property].currentValue);
              console.log('firstChange:', changes[property].firstChange);
            } 
        }
    }
  
  constructor(private http: HttpClient) { }

  sendIndexFolderToBackEnd(): void
  {
    
    let url :string = 'http://localhost:8080/getTokensSpecific';
    console.log("not done");
    this.http.post(url ,this.model).subscribe({
    next: (data) => {console.log("done");this.records = data;},
    error: error => console.error('There was an error!', error)
    })
  }

  ngOnInit(): void {
    this.model = new FileStatsInput(this.indexFolder);
    this.sendIndexFolderToBackEnd();
  }

}

export class FileStatsInput{
  indexFolderName: string;
  constructor ( folderName: string)
  {
    this.indexFolderName = folderName;
  }
}