import { FileInputService } from './file-input.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileInput, IndexingTheFolder } from './file-input';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements OnInit {
  url= "http://localhost:8080/input";
  url2= "http://localhost:8080/getAllDirectoriesOfDdrive";
  str: string[];
  data : IndexingTheFolder[];
  records:FileInput[];
  dDriveDirectories : any =[];
  model:FeedbackViewModel = 
  {
    folderToIndex:'',
    folderCIndex:'',
    pathTxtFile:''
  }

  constructor(private http: HttpClient,private fileInputService: FileInputService) { }
  
  ngOnInit(): void 
  {
       this.getAllFoldersFromDdrive();
  }

  getAllFoldersFromDdrive(): void
  {
     this.fileInputService.getAllFoldersFromDdriveServiceMethod().subscribe(
                 (response) => {
                     this.dDriveDirectories = response;
                     },
                 (error) => {
                         console.log("error"); 
                     }
             )
  }

  
  sendFeedback(): void
  {
    alert(this.model.folderToIndex);
    console.log("not done");
    this.http.post(this.url, this.model ).subscribe({
    next: data => {console.log("done"); location.reload();},
    error: error => console.error('There was an error!', error)
  })

  }

  onClickMe(): void
  {
       this.fileInputService.getBookFromStore().subscribe(
      (response) => { this.records = response},
      (error) => { console.log("error")}
    )

    let urll = "http://localhost:8080/getTokens"
    console.log("You clicked me");

    

   console.log(this.str);
    //return this.records[0].folderCIndex;
  }
}

export interface FeedbackViewModel{
  folderToIndex :string;
  folderCIndex : string;
  pathTxtFile :string;
}