import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup} from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  input="";
  public findMovieForm:FormGroup;
  public movieData:any=[];

  constructor(private formBuilder:FormBuilder,
              private apiservice:ApiService) { }

  ngOnInit() {
    this.findMovieForm=this.formBuilder.group({
      movie:['']

    });
  }
  sendToAPI(formValues){
this.apiservice.getMovie(formValues.movie).subscribe(data=>
  {this.movieData=data;
  console.log(this.movieData);
  });
  }

}
