import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [
CommonModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 public  menuOpen = false;
  languages: Language[] = [
    { code: 'en', name: 'English',  flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'ru', name: 'Русский',  flag: 'https://flagcdn.com/w40/ru.png' },
    { code: 'ro', name: 'Română',    flag: 'https://flagcdn.com/w40/ro.png' },
  ];
  public selectedLanguage!: string;
  public dropdownVisible: boolean = false;


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

  setLang(lang: string) {
    console.log('Selected lang:', lang);

  }



}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

