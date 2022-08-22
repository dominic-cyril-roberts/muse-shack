import { Component, Input, OnInit } from '@angular/core';
import { SongService } from 'src/app/songs/song-service/song.service';
import { Song } from '../song-data/song';
import { MarkdownService } from 'ngx-markdown';

const newSong: Song = {
  id: -1,
  title: "Untitled",
  lyrics: "Lyrics...",
}

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent implements OnInit {
  @Input() song: Song = newSong;
  markdown: any;

  constructor(private songService: SongService, public markdownService: MarkdownService) { 
  }
  
  ngOnInit(): void {
  }
  
}
