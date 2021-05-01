import { Directory } from './directory';
import { ShowDirectoryThatAreAlreadyIndexedService } from './show-directory-that-are-already-indexed.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-directory-that-are-already-indexed',
  templateUrl: './show-directory-that-are-already-indexed.component.html',
  styleUrls: ['./show-directory-that-are-already-indexed.component.css']
})
export class ShowDirectoryThatAreAlreadyIndexedComponent implements OnInit {
  records : Directory[];
  str : string;
  constructor( private showDirectoryThatAreAlreadyIndexedService : ShowDirectoryThatAreAlreadyIndexedService,private router: Router) { }

  ngOnInit(): void {
    this.showAllDirectoriesThatAreIndexed();
    
  }
  
  showAllDirectoriesThatAreIndexed()
  {
    this.showDirectoryThatAreAlreadyIndexedService.getAllDirectoriesFromBackEndServiceMethod().subscribe(data=>this.records=data);
    return this.showDirectoryThatAreAlreadyIndexedService.getAllDirectoriesFromBackEndServiceMethod().subscribe(
                (response) => {
                    this.records = response;
                    },
                (error) => {
                        console.log("error"); 
                    }
            )
  }

}
