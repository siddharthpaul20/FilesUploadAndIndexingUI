import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-show-word-cloud-specific',
  templateUrl: './show-word-cloud-specific.component.html',
  styleUrls: ['./show-word-cloud-specific.component.css']
})
export class ShowWordCloudSpecificComponent implements OnInit {

     options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the size of the upper element multiplied by the value 
    width: 1000,
    height: 400,
    overflow: false,
  };
 
  data: CloudData[] = [];


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
    
    let url :string = 'http://localhost:8080/getWordCloudSpecific';
    console.log("not done");
    this.http.post(url ,this.model).subscribe({
    next: (data) => {console.log("done");this.records = data; this.data= this.records;this.show =true;},
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
