import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.scss'],
})
export class ChatDialogComponent implements OnInit {
  messages: string[] = [];
  currentDate = new Date();
  date = this.currentDate.toLocaleTimeString();
  day = this.currentDate.toLocaleDateString('en-US', { weekday: 'long' });

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.messages = this.chatService.getMessages();
    console.log('Message Length =', this.messages);
  }
}
