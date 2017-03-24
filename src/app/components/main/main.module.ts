import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';
import { TopicListComponent } from './topic-list/topic-list.component';

import { routing } from './main.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TopicDetailComponent, TopicListComponent]
})
export class MainModule { }
