import { Component } from '@angular/core';
import {animate, keyframes, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  animations: [
    trigger('slideInSmooth', [
      transition(':enter', [
        animate('1000ms ease-out', keyframes([
          style({ opacity: 0, transform: 'translateX(-50px)', offset: 0 }),
          style({ opacity: 0.5, transform: 'translateX(10px)', offset: 0.7 }),
          style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
        ]))
      ])
    ])
  ]
})
export class MainComponent {

}
