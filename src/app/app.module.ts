import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { ConfirmHumanComponent } from './confirm-human/confirm-human.component';
import { ForumPostsComponent } from './forum-posts/forum-posts.component';
import { PostingComponent } from './posting/posting.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    ConfirmHumanComponent,
    ForumPostsComponent,
    PostingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
