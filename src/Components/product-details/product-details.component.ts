import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent {
  outerDivClick(): void {
    console.log('Outer div clicked (bubbling)');
  }

  innerDivClick(): void {
    console.log('Inner div clicked (bubbling)');
  }
}
