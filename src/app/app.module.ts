import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ChatService } from './chat.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    ChatService],
  
  bootstrap: [AppComponent]

})
export class AppModule { }
