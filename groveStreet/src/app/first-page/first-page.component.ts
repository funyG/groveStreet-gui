import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  results: string[];
  res = this.results;
  test = "a";
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/RESTfulProject-0.0.1-SNAPSHOT/REST/Products/all').subscribe(data =>{
      this.results = data['results'];
      console.log("naši resžzultati", data)
    })

  }


}
