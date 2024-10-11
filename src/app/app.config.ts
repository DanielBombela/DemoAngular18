import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ErrorResponseInterceptor } from './core/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions({skipInitialTransition:true,})), 
    provideClientHydration(),
    importProvidersFrom(),
    provideHttpClient(withFetch()),
    provideHttpClient(withInterceptors([ErrorResponseInterceptor]))
  ]
};
