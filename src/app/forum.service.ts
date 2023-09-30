import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private forums: string[] = [
    'indoor gardening tips',
    'outdoor gardening adventures',
    'cactus enthusiasts',
    'succulent care',
    'organic gardening secrets',
    'hydroponics innovation',
    'composting champions',
    'bonsai beauties',
    'orchid whisperers',
    'wildflower wonders',
    'urban jungle explorers',
    'vegetable garden experts',
    'medicinal plant discussions',
    'aquaponics aficionados',
    'terrarium builders',
    'tropical paradise lovers',
    'coding challenges',
    'gaming news and reviews',
    'tech support hub',
    'AI and machine learning enthusiasts',
    'cybersecurity discussions',
    'smart home automation',
    'virtual reality experiences',
    'blockchain and cryptocurrency',
    'web development tips and tricks',
    'mobile app development insights',
    'data science and analytics',
    'robotics and automation',
    'internet of things (IoT)',
    '3D printing innovations',
    'software development methodologies',
    'networking and IT infrastructure',
    'hardware tinkering and DIY projects',
    'wearable technology trends',
    'tech startup advice',
    'tech news and rumors',
    'travel adventures and stories',
    'culinary delights and recipes',
    'book lovers and literary discussions',
    'fitness and workout routines',
    'film and movie buffs',
    'music enthusiasts and concert-goers',
    'art and creative expression',
    'pet owners and animal lovers',
    'photography techniques and tips',
    'philosophy and deep thinking',
    'parenting advice and support',
    'home improvement and DIY projects',
    'car enthusiasts and auto maintenance',
    'sports fanatics and game analysis',
    'fashion trends and style tips',
    'history buffs and historical mysteries',
    'health and wellness tips',
    'astronomy and space exploration',
    'language learning and polyglots',
    'mental health support and advice',
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
