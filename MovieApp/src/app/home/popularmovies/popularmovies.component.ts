import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.css']
})
export class PopularmoviesComponent implements OnInit {
movie:[];
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    return this.apiService.getMovie().subscribe((data:any)=>{
      this.movie=data.results;
      console.log(this.movie);
    });
  }

}
