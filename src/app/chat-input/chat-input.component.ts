import { Component, EventEmitter, Output } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
})
export class ChatInputComponent {
  message: string = '';
  @Output() sendMessageFlag = new EventEmitter<boolean>();

  constructor(private chatService: ChatService) {}

  sendMessage(): void {
    if (this.message) {
      // Emit a flag with a boolean value (false in this case)
      this.sendMessageFlag.emit(false);
      this.chatService.sendMessage(this.message);
      this.message = '';
    }
  }
}
