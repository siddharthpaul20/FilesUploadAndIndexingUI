import { ShowAllTokensWholeService } from './show-all-tokens-whole.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-all-tokens-whole',
  templateUrl: './show-all-tokens-whole.component.html',
  styleUrls: ['./show-all-tokens-whole.component.css']
})
export class ShowAllTokensWholeComponent implements OnInit {
  show : boolean = false;
  records : any =[];

  showAllTokensWhole()
  {
    return this.getAllTokensWholeService.getAllTokensFromBackEndServiceMethod().subscribe(
      (response) => {
          this.records = response;
          this.show = true;
          },
      (error) => {
              console.log("error"); 
          }
    )
  }

  constructor( private getAllTokensWholeService : ShowAllTokensWholeService ) { }

  ngOnInit(): void {
    this.showAllTokensWhole();
  }

}
