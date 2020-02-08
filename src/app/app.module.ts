import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { HttpClientModule } from '@angular/common/http';
import { GurunaviButtonComponent } from './gurunavi-button/gurunavi-button.component';

@NgModule({
  declarations: [AppComponent, TopComponent, ChatComponent, ChatInputComponent, GurunaviButtonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ScrollToModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
