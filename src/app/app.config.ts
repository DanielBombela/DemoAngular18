import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ErrorResponseInterceptor } from './core/interceptors/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
   // { provide: BrowserAnimationsModule, useValue: {} },
    provideRouter(routes, withViewTransitions({skipInitialTransition:true,})),
    provideClientHydration(),
    importProvidersFrom([ BrowserAnimationsModule]),

    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptors([ErrorResponseInterceptor]))
  ]
};
