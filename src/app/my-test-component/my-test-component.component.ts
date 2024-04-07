import { Component } from '@angular/core';
import { ProductsService } from '../services/products-service.service';

@Component({
  selector: 'app-my-test-component',
  templateUrl: './my-test-component.component.html',
  styleUrl: './my-test-component.component.scss'
})
export class MyTestComponentComponent {
  constructor(
    private productService: ProductsService
  ){

  }
}
