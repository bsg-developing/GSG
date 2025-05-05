import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
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
export class HeaderComponent {
  public menuOpen = false;
  languages: Language[] = [
    {code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png'},
    {code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w40/ru.png'},
    {code: 'ro', name: 'Română', flag: 'https://flagcdn.com/w40/ro.png'},
  ];
  public selectedLanguage!: string;
  public dropdownVisible: boolean = false;
  public router = inject(Router);


  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  public closeMenu() {
    this.menuOpen = false;
  }

  public toggleLanguageDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  public setLang(lang: string) {
    console.log('Selected lang:', lang);

  }
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

