import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient } from "@angular/common/http";
import "rxjs/add/operator/map";
import {Http, Response } from "@angular/http";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],


})

export class FirstPageComponent  implements OnInit {
  title = 'details';
  id: string;

  arrAgents: string[];
  results: string[];
  res = this.results;
  agent: string;
  selectedAgent: string;
  private url = 'http://localhost:8080/RESTfulProject-0.0.1-SNAPSHOT/REST/Products/all';


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    interface ItemsResponse {
      results: string[];

    }

    this.http.get<ItemsResponse>(this.url).subscribe(data => {
      // data is now an instance of type ItemsResponse, so you can do this:
      this.results = [];
      this.agent = JSON.stringify(data);
      this.arrAgents = Object.keys(data).map(key => data[key]);
      for (let i = 0; i < this.arrAgents.length; i++) {
        console.log(this.arrAgents[i]);
        this.results.push(this.arrAgents[i]);

      }
      console.log('angular data ' + JSON.stringify(data));
      console.log('acs ' + JSON.stringify(this.arrAgents));

    });
  }

}
