import { Component } from '@angular/core' ;

@Component({
  selector: 'app-pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  pageTitle = 'Product List';
  imageWidth = 100;
  imageMargin = 2;
  showImage = false;
  products: any [] = [
    {
      'productId': 1,
      'productName': 'Hamburger',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Slovenian home made Hamburgers.',
      'price': 5.95,
      'starRating': 5.0,
      'imageUrl': 'https://c.tadst.com/gfx/750x500/hamburger-day.jpg?1'
    },
    {
      'productId': 2,
      'productName': 'PIZZA',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': 'Best pizzas ever made.',
      'price': 9.99,
      'starRating': 5.0,
      'imageUrl': 'http://livelonglivegreek.com/wp-content/uploads/2017/05/Pizza-margarita.png'
    },
    ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
