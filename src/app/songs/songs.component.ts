import { Component, OnInit } from '@angular/core';
import { Song } from './song-data/song';
import { SongService } from './song-service/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  songs: Song[] = [];
  displayDetails: any = {};
  

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getAllSongs().subscribe(
      {
        next: (songs) => this.songs = songs
      }
    );
  }

  toggleDetails(song: Song) {
    if(this.displayDetails[song.id]) {
      this.displayDetails[song.id] = !this.displayDetails[song.id];
    } else {
      this.displayDetails[song.id] = true;
    }
  }
}
