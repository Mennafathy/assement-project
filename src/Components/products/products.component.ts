import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  products:string[]=['tv','chair','mobile','air fryer']
  newProduct: string = '';

  addProduct(product: string): void {
    this.products.push(product);
  }
}
