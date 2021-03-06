import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { DisplayPostsComponent } from './display-posts/display-posts.component';
import { IdeaDetailComponent } from './idea-detail/idea-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [DashboardComponent, DisplayPostsComponent, IdeaDetailComponent]
})
export class DashboardModule { }
