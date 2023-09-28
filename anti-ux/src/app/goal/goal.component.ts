import { Component } from '@angular/core';
import { ForumService } from '../forum.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  public goalForum: string = '';

  constructor(public forumService : ForumService) {}


  ngOnInit(){
    this.goalForum = this.forumService.setNewGoalForum();
  }
}
