import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './chat.service';
import { ChatContainerComponent } from './chat-container/chat-container.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatDialogComponent,
    ChatInputComponent,
    MessageComponent,
    ChatContainerComponent,
    HomeComponent,
    SideBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
