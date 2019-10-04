import { Component, OnInit ,Input} from '@angular/core';
import { ApiService } from '../api.service';
  import {FormBuilder,FormGroup} from '@angular/forms';
  import{Router} from '@angular/router';
  @Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
public form:FormGroup;
input="";
movie:[];
  constructor(private apiservice:ApiService,
    private fb:FormBuilder,
    private router:Router) {
}
  

  ngOnInit() {
    this.form=this.fb.group({
      movies:[""]
    });
  }
  onsubmit(formValues){
    this.apiservice.search(formValues.movies).subscribe((data:any)=>{
      this.movie=data.results;
      console.log(this.movie);
    });
  }
  goToDetails(movieId:any){
    this.router.navigate(['/movie/',movieId]);
  }
}

