import { Component, OnInit } from '@angular/core';
import { SONGS } from '../mock-songs';
import { Song } from '../song';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  displayDetails: any = {};
  songs: Song[] = SONGS;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDetails(song: Song) {
    if(this.displayDetails[song.id]) {
      this.displayDetails[song.id] = !this.displayDetails[song.id];
    } else {
      this.displayDetails[song.id] = true;
    }
  }
}
