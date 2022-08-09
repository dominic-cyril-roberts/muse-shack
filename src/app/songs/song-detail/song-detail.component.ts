import { Component, Input, OnInit } from '@angular/core';
import { SongService } from 'src/app/song.service';
import { Song } from '../../song';

const newSong: Song = {
  id: -1,
  title: "Untitled",
  lyrics: "Lyrics...",
}

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  @Input() song: Song = newSong;

  constructor(private songService: SongService) { 
  }
  
  ngOnInit(): void {
  }
  
}
