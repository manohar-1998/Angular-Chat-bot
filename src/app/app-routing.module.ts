import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'chat-bot',
        component: ChatBotComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
