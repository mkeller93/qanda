import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicDetailComponent } from './topic-detail/topic-detail.component';

const routes: Routes = [
  {
    path: 'topics',
    component: TopicListComponent,
    children: [
      {
        path: ":id",
        component: TopicDetailComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);