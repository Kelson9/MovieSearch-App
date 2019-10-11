import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
movie:any;
id:any;
  constructor(private apiservice:ApiService,
    private active:ActivatedRoute){
      this.id = this.active.snapshot.params.id;

     }

  ngOnInit() {
    return this.apiservice.getMovie(this.id).subscribe((data:any)=>{
      this.movie=data;
      console.log(this.movie);
  });
}
}