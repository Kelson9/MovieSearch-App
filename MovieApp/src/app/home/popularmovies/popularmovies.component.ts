import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {Router,ActivatedRoute,Params} from '@angular/router'; 
@Component({
  selector: 'app-popularmovies',
  templateUrl: './popularmovies.component.html',
  styleUrls: ['./popularmovies.component.css']
})
export class PopularmoviesComponent implements OnInit {
movie:[];
id:any;
  constructor(private apiService:ApiService,
    private router:Router,
    private active:ActivatedRoute) { }

  ngOnInit() {
    return this.apiService.getpopular().subscribe((data:any)=>{
      this.movie=data.results;
      console.log(this.movie);
    });
  }
  goToDetails(movieId:any){
    this.router.navigate(['/movie/', movieId]);
  }
}
