import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class ApiService {

  baseURL: string = "http://localhost:3000/";

//Initialization for RESTAPI... HTTP Client for Angular
  constructor(private http: HttpClient) {
  }

//Get all instances within list of students
  getPeople(): Observable<Person[]> {
    console.log('getPeople '+this.baseURL + 'people')
    return this.http.get<Person[]>(this.baseURL + 'people')
  }
//Add a person to the list of students
  addPerson(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(person);
    console.log(body)
    //Post value to json database
    return this.http.post(this.baseURL + 'people', body,{'headers':headers})
  }

}
