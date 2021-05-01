import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType,HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup,FormControl, Validators, NgForm } from '@angular/forms';
import { ChildrenOutletContexts } from '@angular/router';



@Component({
  selector: 'app-upload-folder-for-indexing-form',
  templateUrl: './upload-folder-for-indexing-form.component.html',
  styleUrls: ['./upload-folder-for-indexing-form.component.css']
})
export class UploadFolderForIndexingFormComponent implements OnInit {
  formdata : FormData;
  isSubmitted = false;
  toUploadStopWordFile= false;
  folderUpload = {status: '', fileName: '', fileDownloadUri: '', fileType:'',message:0};
  model:StopWordInputModel = {
    stopWordInput:'',
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {  
  }

  doNotShowStopWordFileDiv():void
  {
    this.toUploadStopWordFile=false;
  }
  
  onSubmitFolder(files) {
    const formData = new FormData();
    for(let i=0;i<files.length;i++)
    {
       formData.append('files',files[i],files[i].name);
       console.log(files[i].webkitRelativePath);
       formData.append('path',files[i].webkitRelativePath);
    }
    
    const req = new HttpRequest('POST', 'http://localhost:8080/uploadMultipleFiles', formData, {
      reportProgress: true,
    });

      this.http.request(req).subscribe(event => {
      this.folderUpload.status='progress';
      // Via this API, you get access to the raw event stream.
      // Look for upload progress events.
      if (event.type === HttpEventType.UploadProgress) {
        // This is an upload progress event. Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        this.folderUpload.message= percentDone;
        console.log(`File is ${percentDone}% uploaded.`);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        this.folderUpload.status='success';
      }
    });
  }

  /*########### Template Driven Form ###########*/
  submitForm(form :NgForm ,files) {
    this.isSubmitted = true;
    if(!form.valid)
    {
      console.log("bye");
      return false;
      
    } 
    else
    {
        alert(JSON.stringify(form.value))
        if(this.toUploadStopWordFile==false )
        {
            console.log("Sending only folder to backend.");
            console.log(" post request to method 1");

            const formData = new FormData();
            for(let i=0;i<files.length;i++)
            {
              formData.append('files',files[i],files[i].name);
              console.log(files[i].webkitRelativePath);
              formData.append('path',files[i].webkitRelativePath);
            }
            
            const req = new HttpRequest('POST', 'http://localhost:8080/uploadMultipleFiles', formData, {
              reportProgress: true,
            });

            this.http.request(req).subscribe(event => {
              this.folderUpload.status='progress';
              // Via this API, you get access to the raw event stream.
              // Look for upload progress events.
                  if (event.type === HttpEventType.UploadProgress)
                  {
                    // This is an upload progress event. Compute and show the % done:
                    const percentDone = Math.round(100 * event.loaded / event.total);
                    this.folderUpload.message= percentDone;
                    console.log(`File is ${percentDone}% uploaded.`);
                  } 
                  else if (event instanceof HttpResponse) 
                  {
                    console.log('File is completely uploaded!');
                    this.folderUpload.status='success';
                  }
            });



        }
        else
        {
            console.log("Sending stopwords alongWith folder to backend.");
            console.log("post request to method 2");

            const formData = new FormData();
            formData.append("stopWordsContainingString",this.model.stopWordInput)
            console.log("hi there  "+this.model.stopWordInput);
            for(let i=0;i<files.length;i++)
            {
              formData.append('files',files[i],files[i].name);
              console.log(files[i].webkitRelativePath);
              formData.append('path',files[i].webkitRelativePath);
            }
            
            const req = new HttpRequest('POST', 'http://localhost:8080/uploadMultipleFilesWithStopWords', formData, {
              reportProgress: true,
            });

              this.http.request(req).subscribe(event => {
              this.folderUpload.status='progress';
              // Via this API, you get access to the raw event stream.
              // Look for upload progress events.
              if (event.type === HttpEventType.UploadProgress) {
                // This is an upload progress event. Compute and show the % done:
                const percentDone = Math.round(100 * event.loaded / event.total);
                this.folderUpload.message= percentDone;
                console.log(`File is ${percentDone}% uploaded.`);
              } else if (event instanceof HttpResponse) {
                console.log('File is completely uploaded!');
                this.folderUpload.status='success';
              }
            });


        
        } 
    }
  }

}

export interface StopWordInputModel{
  stopWordInput :string;
  }