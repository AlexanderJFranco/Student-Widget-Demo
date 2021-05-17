
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Person } from './person';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  people:Person[]=[];
  person = new Person();

  constructor(private apiService:ApiService, private titleService: Title) {
    this.titleService.setTitle("Student-Widget-Demo");
  }



  ngOnInit() {
    this.refreshPeople()
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people=data;
      })

  }



}
