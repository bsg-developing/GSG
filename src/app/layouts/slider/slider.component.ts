import {Component} from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';
import {TranslocoPipe} from '@jsverse/transloco';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  imports: [
    NgForOf,
    TranslocoPipe,
    NgStyle
  ],
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slides: Slide[] = [
    {
      id: 'section1',
      imageUrl: '/assets/images/slider/1.png',
      titleKey: 'slider.title1',
      textKey: 'slider.text1'
    },
    {
      id: 'section2',
      imageUrl: '/assets/images/slider/img.png',
      titleKey: 'slider.title2',
      textKey: 'slider.text2'
    },
    {
      id: 'section3',
      imageUrl: '/assets/images/slider/3.png',
      titleKey: 'slider.title3',
      textKey: 'slider.text3'
    },
    {
      id: 'section4',
      imageUrl: '/assets/images/slider/slide.jpg',
      titleKey: 'slider.title4',
      textKey: 'slider.text4'
    },
    {
      id: 'section5',
      imageUrl: '/assets/images/slider/11.png',
      titleKey: 'slider.title5',
      textKey: 'slider.text5'
    },
    {
      id: 'section6',
      imageUrl: '/assets/images/bg-img.jpg',
      titleKey: 'slider.title6',
      textKey: 'slider.text6'
    },
  ];

}

interface Slide {
  id: string;
  imageUrl: string;
  titleKey: string;
  textKey: string;
}
