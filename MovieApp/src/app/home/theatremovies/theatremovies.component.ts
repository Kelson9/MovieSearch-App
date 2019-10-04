import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-theatremovies',
  templateUrl: './theatremovies.component.html',
  styleUrls: ['./theatremovies.component.css']
})
export class TheatremoviesComponent implements OnInit {
movie:[];
  constructor(private apiservice:ApiService,
    private router:Router) { }

  ngOnInit() {
    return this.apiservice.getMovies().subscribe((data:any)=>{
      this.movie=data.results;
      console.log(this.movie);
    });
  }
  goToDetails(movieId:any){
    this.router.navigate(['/movie/',movieId]);
  }
}
