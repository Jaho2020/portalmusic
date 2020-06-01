import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  nuevasCanciones: any[] = [];
    constructor( private spotify: SpotifyService ) {

    this.spotify.getNewReleases()
    .subscribe ((data:any) => {
    
    this.nuevasCanciones = data; 
    });
}
}