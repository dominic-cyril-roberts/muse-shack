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
  content: any = {};


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
    let songDetails: HTMLElement | null = document.getElementById(`${song.id}`);
    console.log("TOGGLE DETAILS HAS BEEN RUN BWAHAHAHA!");
    if (songDetails) {
      this.toggleClass(songDetails, 'ease-in');
    }

    if (this.displayDetails[song.id]) {

      this.toggleClass(songDetails!, 'ease-in', undefined, () => { this.displayDetails[song.id] = !this.displayDetails[song.id] })
    } else {
      this.displayDetails[song.id] = true;
    }
  }

  /**
   * Utility to toggle a class on an element asynchronously. Useful for triggering transitions
   * 
   * @param element 
   * @param classname 
   */
  public toggleClass(element: HTMLElement, classname: string, before?: Function, after?: Function) {
    if (before) {
      before();
    }

    if (element.classList.contains(classname)) {

      setTimeout(() => {

        element!.classList.remove(classname);

        if (after) {
          setTimeout(after, 200);
        }
      }, 0);
    } else {

      setTimeout(() => {

        element!.classList.add(classname);

        if (after) {
          setTimeout(after, 200);
        }
      }, 0);
    }
  }

  public filter(e: any) {
    if (e && e.value && this.songsCache) {
      this.songsList = this.songsCache.filter((song) => { return song.title.indexOf(e.value) !== -1; });
    } else if (!e || !e.value) {
      this.songsList = [...this.songsCache];
    }
  }

  public test(e: Event) {
    console.log("TEST METHOD HAS BEEN RUN BWEH HEH HEH!");
    e.stopPropagation();
  }
}
