import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
movie:[];
  constructor(private apiservice:ApiService){
     }

  ngOnInit() {
    return this.apiservice.getMovies().subscribe((data:any)=>{
      this.movie=data.results;
      console.log(this.movie);
  });
}
}