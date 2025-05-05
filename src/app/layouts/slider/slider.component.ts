import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  sections = ['section1', 'section2', 'section3'];
  currentSection = 0;

  ngAfterViewInit() {
    this.onScroll();
  }

  scrollToSection(index: number) {
    const el = document.getElementById(this.sections[index]);
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

    const distances = this.sections.map(id => {
      const el = document.getElementById(id)!;
      const mid = el.offsetTop + el.offsetHeight / 2;
      return Math.abs(mid - center);
    });

    this.currentSection = distances.indexOf(Math.min(...distances));
  }
}

