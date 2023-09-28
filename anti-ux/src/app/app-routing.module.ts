import { NgModule } from '@angular/core';
import { ConfirmHumanComponent } from './confirm-human/confirm-human.component';
import { GoalComponent } from './goal/goal.component';
import { ForumPostsComponent } from './forum-posts/forum-posts.component';
import { PostingComponent } from './posting/posting.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'goal',
    component: GoalComponent,
  },
  {
    path: 'forum',
    component: ForumPostsComponent,
  },
  {
    path: 'posting',
    component: PostingComponent,
  },
  {
    path: 'confirm-human',
    component: ConfirmHumanComponent,
  },
  {
    path: '',
    redirectTo: '/goal',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
