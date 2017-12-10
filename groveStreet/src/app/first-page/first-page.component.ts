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

  private url = 'http://localhost:8080/RESTfulProject-0.0.1-SNAPSHOT/REST/Products/categories';


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    interface ItemsResponse {
      results: string[];

    }


  }

}
