import { Component } from '@angular/core';
import {CurrentProductService} from "@spartacus/storefront";
import {Observable} from "rxjs";
import {Product} from "@spartacus/core";

@Component({
  selector: 'app-custom-product-intro',
  templateUrl: './custom-product-intro.component.html',
  styleUrls: ['./custom-product-intro.component.scss']
})
export class CustomProductIntroComponent {
  // @ts-ignore
  product$: Observable<Product> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) { }
}
