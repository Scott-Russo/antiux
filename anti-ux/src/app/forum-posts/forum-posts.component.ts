import { Component } from '@angular/core';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-forum-posts',
  templateUrl: './forum-posts.component.html',
  styleUrls: ['./forum-posts.component.css']
})
export class ForumPostsComponent {
  public randomizedForums: string[];
  public currentForums: string[];
  public startIndex = 0;
  public itemsPerPage = 5;

  constructor(public forumService: ForumService){
    this.randomizedForums = shuffle(forumService.getForums());

    this.currentForums = this.updateCurrentForums();
  }

  updateCurrentForums(): string[] {
    return this.randomizedForums.slice(this.startIndex, this.startIndex + this.itemsPerPage);
  }
  
  nextPage(): void {
    //assigns either to i + 5 or 0,
    this.startIndex = (this.startIndex + this.itemsPerPage <= this.randomizedForums.length ? this.startIndex + this.itemsPerPage : 0);
    this.currentForums = this.updateCurrentForums();
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
