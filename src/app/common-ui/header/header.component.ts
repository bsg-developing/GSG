import {Component, inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ClickOutsideDirective} from '../click-outside.directive';
import {TranslocoPipe, TranslocoService} from '@jsverse/transloco';
import {NgIf, UpperCasePipe} from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [ClickOutsideDirective, TranslocoPipe, UpperCasePipe, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  public menuOpen = false;
  languages: Language[] = [
    {code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png'},
    {code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w40/ru.png'},
    {code: 'ro', name: 'Română', flag: 'https://flagcdn.com/w40/ro.png'},
  ];
  public selectedLanguage!: string;
  public dropdownVisible: boolean = false;
  public router = inject(Router);
  private translocateService = inject(TranslocoService);

  constructor() {}

  ngOnInit() {
      const lang = localStorage.getItem('lang') || 'ro';
      this.selectedLanguage = lang;
      this.translocateService.setActiveLang(lang);
  }
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
    this.translocateService.setActiveLang(lang);
    this.selectedLanguage = lang;
    localStorage.setItem('lang', lang);
  }
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}

