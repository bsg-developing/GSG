import { Component } from '@angular/core';
import {HeaderComponent} from './common-ui/header/header.component';
import {AboutUsComponent} from './layouts/about-us/about-us.component';
import {MainComponent} from './layouts/main/main.component';
import {FooterComponent} from './common-ui/footer/footer.component';
import {TeamComponent} from './layouts/team/team.component';
import {ProductsComponent} from './layouts/products/products.component';
import {SliderComponent} from './layouts/slider/slider.component';
import {NgxScrollTopComponent} from 'ngx-scrolltop';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AboutUsComponent, MainComponent, FooterComponent, TeamComponent, ProductsComponent, SliderComponent, NgxScrollTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
