import {Component} from '@angular/core';


@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {
  sections = ['section1', 'section2', 'section3'];
  currentSection = 0;

  scrollToSection(index: number) {
    const element = document.getElementById(this.sections[index]);
    if (element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  onScroll() {
    const offsets = this.sections.map(id => {
      const el = document.getElementById(id);
      return el ? el.getBoundingClientRect().top : Infinity;
    });

    this.currentSection = offsets.findIndex(offset => offset > -100 && offset < window.innerHeight / 2);
  }
}
