import { Component } from '@angular/core';
import { ForumService } from '../forum.service';

type buttonType = 'Next Page' | 'First Page';

@Component({
  selector: 'app-forum-posts',
  templateUrl: './forum-posts.component.html',
  styleUrls: ['./forum-posts.component.css']
})
export class ForumPostsComponent {
  public randomizedForums: string[];
  public currentForums: string[];

  public startIndex = 0;
  public itemsPerPage = 8;

  public buttonOneName: buttonType = 'Next Page';
  public buttonTwoName: buttonType = 'First Page';

  constructor(public forumService: ForumService){
    this.randomizedForums = shuffle(forumService.getForums());

    this.currentForums = this.updateCurrentForums();
  }

  updateCurrentForums(): string[] {
    return this.randomizedForums.slice(this.startIndex, this.startIndex + this.itemsPerPage);
  }

  clickedButtonOne(): void {
    if(this.buttonOneName == 'Next Page'){
      this.nextPage();
    }
    else{
      this.goFirstPage();
    }
    this.swapStrings();
  }

  clickedButtonTwo(): void{
    if(this.buttonTwoName == 'Next Page'){
      this.nextPage();
    }
    else{
      this.goFirstPage();
    }
    this.swapStrings();
  }

  goFirstPage(): void{
    this.startIndex = 0;
    this.currentForums = this.updateCurrentForums();
  }
  
  nextPage(): void {
    //assigns either to i + 5 or 0,
    this.startIndex = (this.startIndex + this.itemsPerPage <= this.randomizedForums.length ? this.startIndex + this.itemsPerPage : 0);
    this.currentForums = this.updateCurrentForums();
  }

  swapStrings(): void {
    if(Math.random() > 0.8){
      [this.buttonOneName, this.buttonTwoName] = [this.buttonTwoName, this.buttonOneName];
    }
  }
}

//took this from stackoverflow, implementation of fisher yates
const shuffle = (array: string[]) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 
