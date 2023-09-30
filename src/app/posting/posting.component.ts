import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForumService } from '../forum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.css']
})
export class PostingComponent {
  forumName: string = '';
  errorMessage: string = '';
  postForm: FormGroup;
  postButton: string;
  correctForum: boolean = false;

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private forumService: ForumService){
    this.postForm = this.formBuilder.group({
      postContent: ['', Validators.required]
    });
    this.postButton = 'Post';
  }

  ngOnInit():void {
    this.route.params.subscribe(params => {
      this.forumName = params['forumName']
    });
    if(this.forumName === this.forumService.getGoalForum()){
      this.correctForum = true;
    }
  }

  submitPost(): void{
    if(this.postButton == 'Delete'){
      this.postForm.reset();
      return;
    }

    const postContentString: string = this.postForm.get('postContent')?.value;

    if(this.errorMessage == 'Ok, post now!' && this.checkPostContent(postContentString)){
      this.router.navigate(['/confirm-human']);
      return;
    }

    else if(this.checkPostContent(postContentString)){
      this.errorMessage = 'To Post, Wait 10 seconds then click Post';
      this.postButton = 'Delete';

      setTimeout(() => {this.postButton = 'Post';
      this.errorMessage = 'Ok, post now!';}, 10000);
      
    }

    setTimeout(() => {this.errorMessage = '';}, 3000);
  }
  
  checkPostContent(postContent: string): boolean {
    //not long enough 30 words
    if(!this.enoughSpaces(postContent, 30)){
      this.errorMessage = 'not enough words';
      return false;
    }
    
    //check 3 periods and 3 capital letters
    else if(!this.enoughCapitalsAndPeriods(postContent)){
      this.errorMessage = 'not enough complete sentences';
      return false;
    }

    //too many words 45
    else if(!this.tooManySpaces(postContent, 45)){
      this.errorMessage = 'too many words';
      return false;
    }

    //no signature hyphen check
    else if (!this.containsHyphen(postContent)){
      this.errorMessage = 'make sure you sign with a hyphen';
      return false;
    }
    
    //not on topic (contains forum name)
    else if (!this.isOnTopic(postContent)){
      this.errorMessage = 'make sure your post is on topic (contains forum title)';
      return false;
    }

    else return true;
  }

  enoughSpaces(postContent: string, numSpaces: number): boolean{
    const spaces = postContent.match(/ /g);

    if(!spaces) return false;
    else if(spaces?.length < numSpaces) return false;
    else return true;
  }

  enoughCapitalsAndPeriods(postContent: string): boolean{
    const numUpper = postContent.length - postContent.replace(/[A-Z]/g, '').length;
    const numPeriods = postContent.length - postContent.replace(/[.]/g, '').length;

    if(numUpper< 5 || numPeriods < 5) return false;
    else return true;
  }

  tooManySpaces(postContent: string, numSpaces: number): boolean{
    const spaces = postContent.match(/ /g);

    if(!spaces) return false;
    else if(spaces?.length > numSpaces) return false;
    else return true;
  }

  containsHyphen(postContent: string): boolean{
    if(!postContent.includes('-')) return false;
    else return true;
  }

  isOnTopic(postContent: string): boolean {
    if(!postContent.includes(this.forumName)) return false;
    else return true;
  }

  reallySureCheck(){

  }
}