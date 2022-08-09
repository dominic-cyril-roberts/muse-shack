import { Component, OnInit } from '@angular/core';
import { SONGS } from '../mock-songs';
import { Song } from '../song';
import { SongService } from '../song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
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
