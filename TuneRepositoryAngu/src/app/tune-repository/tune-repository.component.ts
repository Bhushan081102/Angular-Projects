import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TuneRepositoryService } from '../tune-repository.service';

@Component({
  selector: 'app-tune-repository',
  templateUrl: './tune-repository.component.html',
  styleUrls: ['./tune-repository.component.css']
})
export class TuneRepositoryComponent {

  title='SPring boot is connected to the angular';

  School:any;
  constructor(private service:TuneRepositoryService){}

  ngOnInit(){
   //this.School=this.service.getSchools().subscribe(data=>this.School=data);
   this.service.getSchools().subscribe(data => {
    this.School = data;
  });
}
}
