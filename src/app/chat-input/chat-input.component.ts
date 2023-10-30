import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
})
export class ChatInputComponent {
  message: string = '';

  constructor(private chatService: ChatService) {}

  sendMessage(): void {
    if (this.message) {
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}
