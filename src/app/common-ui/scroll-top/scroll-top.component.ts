import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent {
  scrollPercent = 0;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollPercent = docHeight > 0
      ? Math.round((scrollTop / docHeight) * 100)
      : 0;
  }

  scrollToTop() {
    // Плавный скролл наверх через ViewportScroller
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
