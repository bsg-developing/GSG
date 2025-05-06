import {ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {provideTransloco} from '@jsverse/transloco';
import {provideHttpClient} from '@angular/common/http';
import {SwiperModule} from 'ngx-swiper-wrapper';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {TranslocoHttpLoader} from './core/transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ru', 'ro'],
        defaultLang: 'en',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    importProvidersFrom(SwiperModule),
    provideAnimationsAsync(),
    provideClientHydration(withEventReplay())
  ]
};
