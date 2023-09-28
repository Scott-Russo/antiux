import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router){
    this.postForm = this.formBuilder.group({
      postContent: ['', Validators.required]
    });
  }

  ngOnInit():void {
    this.route.params.subscribe(params => {
      this.forumName = params['forumName']
    });
  }

  submitPost(): void{
    const postContent = this.postForm.get('postContent')?.value;

    this.errorMessage = 'error!';

    sleep(2000);
    this.router.navigate(['/confirm-human']);
  }
  
}

//also took this from stack overflow
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}