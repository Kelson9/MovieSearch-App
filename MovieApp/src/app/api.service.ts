import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }
  getMovie(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=0e175600a982c619f3646375d1e914bb&language=en-US&page=1');
  }
  getMovies(){
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=0e175600a982c619f3646375d1e914bb&language=en-US&page=1');
  }
  search(){
    return this.http.get('https://api.themoviedb.org/3/search/movie?api_key=0e175600a982c619f3646375d1e914bb&language=en-US&query=rambo&page=1&include_adult=false');
  }
}
