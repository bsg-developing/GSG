import {
  provideTransloco,
  TranslocoModule
} from '@jsverse/transloco';
import { isDevMode, NgModule } from '@angular/core';
import { TranslocoHttpLoader } from './transloco-loader';


@NgModule({
  exports: [ TranslocoModule ],
  providers: [
    provideTransloco({
      config: {
        availableLangs: ['ru', 'ro'],
        defaultLang: 'ro',
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
  ],
})
export class TranslocoRootModule {}
