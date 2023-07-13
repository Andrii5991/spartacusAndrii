import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "@spartacus/core";
import {CurrentProductService, ICON_TYPE} from "@spartacus/storefront";

@Component({
  selector: 'app-custom-product-summary',
  templateUrl: './custom-product-summary.component.html',
  styleUrls: ['./custom-product-summary.component.scss']
})
export class CustomProductSummaryComponent {
  iconTypes = ICON_TYPE;

// @ts-ignore
  product$: Observable<Product> = this.currentProductService.getProduct();

  constructor(private currentProductService: CurrentProductService) { }
}
