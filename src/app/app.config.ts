import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule , HttpHandler, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { AuthInterceptorService } from '../services/auth-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch(),withInterceptors([AuthInterceptorService])),]
};
