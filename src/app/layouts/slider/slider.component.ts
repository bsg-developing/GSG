import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
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
export class SliderComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  currentSection = 0;

  slides: Slide[] = [
    {
      id: 'section1',
      imageUrl: '/assets/images/slider/2.png',
      titleKey: 'slider.title1',
      textKey: 'slider.text1'
    },
    {
      id: 'section2',
      imageUrl: '/assets/images/photo_2025-05-06_10-07-41.jpg',
      titleKey: 'slider.title2',
      textKey: 'slider.text2'
    },
    {
      id: 'section3',
      imageUrl: '/assets/images/slider/2.png',
      titleKey: 'slider.title3',
      textKey: 'slider.text3'
    },
    {
      id: 'section4',
      imageUrl: '/assets/images/slider/4.avif',
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

  ngAfterViewInit() {
    this.onScroll();
  }

  scrollToSection(index: number) {
    const el = document.getElementById(this.slides[index].id);
    if (el) {
      this.container.nativeElement.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  onScroll() {
    const { scrollTop, clientHeight } = this.container.nativeElement;
    const center = scrollTop + clientHeight / 2;

    const distances = this.slides.map(slide => {
      const el = document.getElementById(slide.id)!;
      const mid = el.offsetTop + el.offsetHeight / 2;
      return Math.abs(mid - center);
    });

    this.currentSection = distances.indexOf(Math.min(...distances));
  }
}

interface Slide {
  id: string;
  imageUrl: string;
  titleKey: string;
  textKey: string;
}
