import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseUrl:string = "https://api.themoviedb.org/3/";
  private key = "2d7101211d2962d49e24f57b0add39dd";

  constructor(public http: HttpClient) {
  }

  getLatestMovies(){
    return this.http.get(this.baseUrl + "movie/latest?api_key=" + this.key);
  }

  getPopularMovies(){
    return this.http.get(this.baseUrl + "movie/popular?api_key=" + this.key);
  }
}
