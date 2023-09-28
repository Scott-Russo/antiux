import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private forums: string[] = [
    'healthy plants',
    'unhealthy plants',
  ];

  private goalForum: string = this.forums[0];

  constructor() { }

  getForums(): string[] {
    return this.forums;
  }

  getGoalForum(): string {
    return this.goalForum;
  }

  setNewGoalForum(): string {
    this.goalForum = this.forums[Math.floor(Math.random() * this.forums.length)]
    return this.goalForum;
  }
}
