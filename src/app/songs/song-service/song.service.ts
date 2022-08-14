import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Song } from '../song-data/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) { }

  getAllSongs(): Observable<Song[]> {
    return this.httpClient.get<Song[]>("http://localhost:8080/song",{});
  }

  getSongById(id: number): Song | null | string {
    return "poop";
  }

  getTagsBySongId(id: number): string[] | null {
    return null
  }

}
