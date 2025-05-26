import { Component } from '@angular/core';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'app-products',
  imports: [
    TranslocoPipe
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
