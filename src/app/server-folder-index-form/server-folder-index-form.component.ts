import { HttpClient } from '@angular/common/http';
import { ServerFolderIndexFormService } from './server-folder-index-form.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-server-folder-index-form',
  templateUrl: './server-folder-index-form.component.html',
  styleUrls: ['./server-folder-index-form.component.css']
})
export class ServerFolderIndexFormComponent implements OnInit {

  ngOnInit(): void 
  {
    this.getAllFoldersFromDdrive();
  }
  isSubmitted = false;
  dDriveDirectories : any =[];
  input : ServerFolderIndexInput;
  url = "http://localhost:8080/serverFolderIndexInput";

  // City Names
  City: any = ['d:\\ts\\stw.txt','d:\\stopwordsFile2','d:\\stopwordsFile3']

  constructor(public fb: FormBuilder, private serverFolderIndexFormService: ServerFolderIndexFormService, private http: HttpClient) { }

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    folderToIndex: ['', [Validators.required]],
    folderCIndex: ['', [Validators.required]],
    stopWords: ['', [Validators.required]],
  })


  // Choose folderToIndex using select dropdown
  changeFolderToIndex(e) {
    console.log(e.value)
    this.folderToIndex.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Choose folderCIndex using select dropdown
  changeFolderCIndex(e) {
    console.log(e.value)
    this.folderCIndex.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Choose stopWords using select dropdown
  changeStopWords(e) {
    console.log(e.value)
    this.stopWords.setValue(e.target.value, {
      onlySelf: true
    })
  }

  // Getter method to access formcontrols
  get folderToIndex() {
    return this.registrationForm.get('folderToIndex');
  }

  get folderCIndex() {
    return this.registrationForm.get('folderCIndex');
  }

  get stopWords() {
    return this.registrationForm.get('stopWords');
  }


  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) 
    {
      return false;
    } 
    else 
    {
      alert(JSON.stringify(this.registrationForm.value));
      console.log("making http post request");
      console.log(this.folderToIndex.value);
      console.log(this.folderCIndex.value);
      console.log(this.stopWords.value);
      this.input = new ServerFolderIndexInput(this.folderToIndex.value,this.folderCIndex.value,this.stopWords.value);
      this.http.post(this.url, this.input ).subscribe({
        next: (data) => {console.log("done");},
        error: error => console.error('There was an error!', error)
        })
      
    }

  }

  

  getAllFoldersFromDdrive(): void
  {
     this.serverFolderIndexFormService.getAllFoldersFromDdriveServiceMethod().subscribe(
                 (response) => {
                     this.dDriveDirectories = response;
                     },
                 (error) => {
                         console.log("error"); 
                     }
             )
  }

}

export class ServerFolderIndexInput
{
   folderToIndex: string;
   folderCIndex: string;
   pathTxtFile: string;

   constructor (folderToIndex :string, folderCIndex:string, pathTxtFile:string)
   {
     this.folderToIndex = folderToIndex;
     this.folderCIndex = folderCIndex;
     this.pathTxtFile = pathTxtFile;
   }
}