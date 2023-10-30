import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messages: string[] = [];

  getMessages(): string[] {
    return this.messages;
  }

  sendMessage(message: string): void {
    this.messages.push(` ${message}`);
    // Simulate a response (replace with your chatbot/GPT logic)
    this.messages.push(`This is a Bot Response`);
  }
}
