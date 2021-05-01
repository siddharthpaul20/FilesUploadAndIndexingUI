import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-specific-page-component',
  templateUrl: './specific-page-component.component.html',
  styleUrls: ['./specific-page-component.component.css']
})
export class SpecificPageComponentComponent implements OnInit {
  indexedFolder: any ;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['directory']);
    //this.indexedFolder = this.activatedRoute.snapshot.paramMap.get("directory");
    this.activatedRoute.paramMap.subscribe(params => { 
      console.log(params);
       this.indexedFolder = params.get('directory'); 
     } ); 
  }
  

}
