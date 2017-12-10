import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  private url = 'http://localhost:8080/RESTfulProject-0.0.1-SNAPSHOT/REST/Products/Category/all';
  categories: Array<object>;

  constructor(private http: HttpClient) {
  }


  ngOnInit(): void {
    interface ItemsResponse {
      results: string[];

    }

    this.http.get<ItemsResponse[]>(this.url).subscribe(data => {
      this.categories = data;
      if (this.categories.length > 1) {
        console.log("Dobil sem kategorije", this.categories);
      } else {
        console.error("array je prazen");

      }


    }




    );
  }

}

