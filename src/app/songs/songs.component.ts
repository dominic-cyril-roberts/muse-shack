import { Component, OnInit } from '@angular/core';
import { Song } from './song-data/song';
import { SongService } from './song-service/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  songsCache: Song[] = [];  //full song list
  songsList: Song[] = [];   //filtered song list for display

  displayDetails: any = {}; //boolean hashmap
  

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.songService.getAllSongs().subscribe(
      {
        next: (songs) => {
          this.songsCache = songs;
          this.songsList = [...songs];
        }
      }
    );
  }

  public toggleDetails(song: Song) {
    if(this.displayDetails[song.id]) {
      this.displayDetails[song.id] = !this.displayDetails[song.id];
    } else {
      this.displayDetails[song.id] = true;
    }

    if(this.displayDetails[song.id]) {
      let songDetails = document.getElementById(`song.id`);
      if(songDetails) {
        setTimeout(() => {songDetails!.classList.add('ease-in')}, 0);
      }
    }
  }

  public filter(e: any) {
    console.log("change event fired with object " + e.value);
    if(e && e.value && this.songsCache) {
      this.songsList = this.songsCache.filter( (song) => { return song.title.indexOf(e.value) !== -1; });
    } else if (!e || !e.value) {
      this.songsList = [...this.songsCache];
    }
    console.log(this.songsList!);
    console.log(this.songsCache!);
  }
}
