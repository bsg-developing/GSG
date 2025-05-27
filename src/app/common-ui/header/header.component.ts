import {Component, Inject, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {Router} from '@angular/router';
import {ClickOutsideDirective} from '../click-outside.directive';
import {TranslocoPipe, TranslocoService} from '@jsverse/transloco';
import {isPlatformBrowser, NgIf, UpperCasePipe} from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [ClickOutsideDirective, TranslocoPipe, UpperCasePipe, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  public menuOpen = false;
  public dropdownVisible = false;
  public selectedLanguage!: string;

  public router = inject(Router);
  private translocoService = inject(TranslocoService);
  @Inject(PLATFORM_ID) private platformId!: Object;

  languages: Language[] = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
    { code: 'ro', name: 'Română', flag: 'https://flagcdn.com/w40/ro.png' },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const lang = localStorage.getItem('lang') || 'ro';
      this.selectedLanguage = lang;
      this.translocoService.setActiveLang(lang);
    } else {
      this.selectedLanguage = 'ro';
      this.translocoService.setActiveLang('ro');
    }
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
    this.translocoService.setActiveLang(lang);
    this.selectedLanguage = lang;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }
}

export interface Language {
  code: string;
  name: string;
  flag: string;
}
