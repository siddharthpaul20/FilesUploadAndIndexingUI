import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-network-drive-index-input-form',
  templateUrl: './network-drive-index-input-form.component.html',
  styleUrls: ['./network-drive-index-input-form.component.css']
})
export class NetworkDriveIndexInputFormComponent implements OnInit {

  records:any=[];
  model:SharedDriveIndexInputModel = {
  folderToIndex:'',
  folderCIndex:'',
  pathTxtFile:'d:/ts/stw.txt',
}

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }

  sendSharedDriveIndexInput(): void{
    let url = "http://localhost:8080/input";
    console.log("not done");
    this.http.post(url, this.model ).subscribe({
    next: data => {console.log("done"); location.reload();},
    error: error => console.error('There was an error!', error)
    })

  }
}
export interface SharedDriveIndexInputModel{
  folderToIndex :string;
  folderCIndex : string;
  pathTxtFile :string;
}