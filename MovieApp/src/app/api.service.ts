import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getMovie(movie){
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=0e175600a982c619f3646375d1e914bb');
  }
}
