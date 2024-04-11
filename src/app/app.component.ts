import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule,
    FormsModule,
    AppModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(
    private chatService: ChatService

  ) {
    chatService.listen('broadcast').subscribe((data: any) => {
      this.messages.push(data);
    });
  }

  client1Model = '';
  client2Model = '';


  title = 'resteau';

  messages : any[] = [];

  sendMessage(client: number) {
    this.chatService.sendMessage(client, client === 1 ? this.client1Model : this.client2Model);
    client === 1 ? this.client1Model = '' : this.client2Model = ''; // cleaning the input
  }
}
