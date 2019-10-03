import { Component, OnInit ,Input} from '@angular/core';
import { ApiService } from '../api.service';
  import {FormBuilder,FormGroup} from '@angular/forms';
  @Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
form:FormGroup;
movie:[];
  constructor(private apiservice:ApiService,
    private fb:FormBuilder) {
}
  

  ngOnInit() {
    this.form=this.fb.group({
      movies:[""]
    });
  }
  onsubmit(){
    this.apiservice.search().subscribe((data:any)=>
    {
      this.movie=data.results;
      console.log(this.movie);
    });
  }
  }

