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
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {
  @Input() song: Song = newSong;
  markdown: any;

  constructor(private songService: SongService, public markdownService: MarkdownService) { 
  }
  
  ngOnInit(): void {
  }
  
}
