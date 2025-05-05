import {Component, HostListener, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule, ViewportScroller} from '@angular/common';
import {ClickOutsideDirective} from '../click-outside.directive';


@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    ClickOutsideDirective,
    ClickOutsideDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
 public  menuOpen = false;
  languages: Language[] = [
    { code: 'en', name: 'English',  flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'ru', name: 'Русский',  flag: 'https://flagcdn.com/w40/ru.png' },
    { code: 'ro', name: 'Română',    flag: 'https://flagcdn.com/w40/ro.png' },
  ];
  public selectedLanguage!: string;
  public dropdownVisible: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {}

  router = inject(Router);

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
  public toggleLanguageDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  ngOnInit() {
    // сразу проверяем, вдруг страница уже прокручена (например, по якорю)
    this.checkScroll();
  }

  setLang(lang: string) {
    console.log('Selected lang:', lang);

  }
  isScrolled = false;

  @HostListener('window:scroll')
  checkScroll() {
    const [, y] = this.viewportScroller.getScrollPosition();
    this.isScrolled = y > 880;
     console.log('scrollY =', y, ' → isScrolled =', this.isScrolled);
  }
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

