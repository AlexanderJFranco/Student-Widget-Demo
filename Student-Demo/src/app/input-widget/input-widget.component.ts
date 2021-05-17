import { Component, OnInit , Renderer2} from '@angular/core';

import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { Person } from './person';

@Component({
  selector: 'app-input-widget',
  templateUrl: './input-widget.component.html',
  styleUrls: ['./input-widget.component.css']
})
export class InputWidgetComponent implements OnInit {

  isDone:boolean=false;         //boolean to check for Captcha
  showError: boolean = false;   //Boolean to toggle error message
  people:Person[]=[];           //Create array of instances of Person
  person = new Person();

  constructor(private apiService:ApiService, private _ren:Renderer2) {}

  ngOnInit() {
    this.refreshPeople()        //Refresh list upon page load

  }

//Function to render Google ReCaptcha
  createCaptcha(){
    let script = this._ren.createElement('script');
    script.defer=true;
    script.async=true;
    script.src="https://www.google.com/recaptcha/api.js";
    this._ren.appendChild(document.body, script);
  }

  refreshPeople() {
    this.apiService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.people=data;
      })

  }
  //Function to flag if captcha was completed
resolved(token:any){
this.isDone=true;
}
  addPerson() {

if(this.isDone==true){
  this.apiService.addPerson(this.person)
      .subscribe(data => {
        console.log(data)
        this.refreshPeople();
      })

      window.location.reload();

}
//Throw error messagge if ReCaptcha is incomplete
else{
      this.showError=true;

}

}

}
