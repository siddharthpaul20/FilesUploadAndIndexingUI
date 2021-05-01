import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-content-viewer',
  templateUrl: './content-viewer.component.html',
  styleUrls: ['./content-viewer.component.css'],
})
export class ContentViewerComponent implements OnInit {
  url: string = "http://localhost:8080/getFileContent";
  indexedFolder: any ;
  pointerFrom : number = 0;
  allContent : any = [];
  // notEmptyContent : boolean = true;
  // notscrolly : boolean = true;

  

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['textFile']);
    //this.indexedFolder = this.activatedRoute.snapshot.paramMap.get("directory");
    this.activatedRoute.paramMap.subscribe(params => { 
      console.log(params);
       this.indexedFolder = params.get('textFile'); 
     } );

     this.loadInItContent();
  }
  onScroll() {
    console.log('scrolled!!');
    // if(this.notscrolly && this.notEmptyContent)
    // {
    //   this.notscrolly = false;
    //   this.loadNextContent();
    // }
    this.loadNextContent();

  }

  loadInItContent()
  {
     const formData = new FormData();
     formData.append("file",this.indexedFolder);
     formData.append("pointerFrom",this.pointerFrom.toString());
     this.http.post(this.url , formData).subscribe({
      next: (data) => 
      { 
        console.log("done");
        this.allContent = data;
        this.pointerFrom=this.pointerFrom+2048;
        console.log("On success --> "+this.pointerFrom);
      },
      error: error => 
      {
        console.error('There was an error!', error);
        console.log("On error --> "+this.pointerFrom);
      }

      })
  }

  loadNextContent()
  {
    console.log("inside loadNextContent"+this.pointerFrom)
    const formData = new FormData();
    formData.append("file",this.indexedFolder);
    formData.append("pointerFrom",this.pointerFrom.toString());
    this.http.post(this.url , formData).subscribe({
     next: (data :any) => 
     { 
       console.log("done");
       const newContent = data;
        // if(newContent.length === 0 )
        // {
        //   this.notEmptyContent = false;
        // }
       this.pointerFrom=this.pointerFrom+2048;
       console.log("On success --> "+this.pointerFrom);
       this.allContent = this.allContent.concat(newContent);
       //this.notscrolly = true;
     },
     error: error => 
     {
       console.error('There was an error!', error);
       console.log("On error --> "+this.pointerFrom);
     }

     })
  }

}
