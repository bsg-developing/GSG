import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode, makeStateKey,
  provideZoneChangeDetection,
  TransferState
} from '@angular/core';
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
    provideHttpClient(),
    {
      provide: 'TRANSFER_TRANSLATIONS',
      useFactory: (ts: TransferState) => {
        return {
          set: (key: string, data: any) => ts.set(makeStateKey(key), data),
          get: (key: string) => ts.get(makeStateKey(key), null)
        };
      },
      deps: [TransferState]
    },
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',

      })),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ru', 'ro'],
        defaultLang: 'ro',
        reRenderOnLangChange: true,
        prodMode: true,
      },
      loader: TranslocoHttpLoader,
    }),
    importProvidersFrom(SwiperModule),
    provideAnimationsAsync(),
    provideClientHydration(withEventReplay())
  ]
};

