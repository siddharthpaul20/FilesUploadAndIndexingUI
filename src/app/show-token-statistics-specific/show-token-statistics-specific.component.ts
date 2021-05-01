import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-show-token-statistics-specific',
  templateUrl: './show-token-statistics-specific.component.html',
  styleUrls: ['./show-token-statistics-specific.component.css']
})
export class ShowTokenStatisticsSpecificComponent implements OnInit {

  @Input() indexFolder :string;
  show :boolean =false;
  records:any=[];
  model: FileStatsInput;

  ngOnChanges(changes: SimpleChanges) :void {
 
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
    
    let url :string = 'http://localhost:8080/getTokensStatisticsSpecific';
    console.log("not done");
    this.http.post(url ,this.model).subscribe({
    next: (data) => {console.log("done");this.records = data;this.show =true;},
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
