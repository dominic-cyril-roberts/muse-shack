import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { LyricsComponent } from './songs/lyrics/lyrics.component';

import { MarkdownService } from 'ngx-markdown';
@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    LyricsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
