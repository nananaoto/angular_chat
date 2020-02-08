import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopComponent } from './top/top.component';
import { ChatComponent } from './chat/chat.component';
const routes: Routes = [
  { path: 'top', component: TopComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', redirectTo: 'top' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 50]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
