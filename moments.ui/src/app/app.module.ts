import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material.module';
/* Routing */
import { AppRoutingModule } from './app-routing.module';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { ConfigComponent } from './config/config.component';

import { NasaComponent } from './nasa/nasa.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { MomentSearchComponent } from './moment-search/moment-search.component';

import { httpInterceptorProviders } from './http-interceptors/index';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { CreateRegisterOpenerComponent } from './create-register-opener/create-register-opener.component';
import { CreateCategoryOpenerComponent } from './create-category-opener/create-category-opener.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { MenuListCategoryComponent } from './menu-list-category/menu-list-category.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { RouterService } from './services/router.service';
import { AuthenticationService } from './services/authentication.service';
import { NasaService } from './services/nasa.service';
import { UserprofileService } from './services/userprofile.service';
import { CategoryService } from './services/category.service';
import { EditMomentOpenerComponent } from './edit-moment-opener/edit-moment-opener.component';
import { EditMomentViewComponent } from './edit-moment-view/edit-moment-view.component';

import * as Sentry from "@sentry/browser";
import { environment } from 'src/environments/environment';
Sentry.init({
  dsn: "https://ae61d913559e404aa828b5e8d5f280a2@o405078.ingest.sentry.io/5270135",
  // TryCatch has to be configured to disable XMLHttpRequest wrapping, as we are going to handle
  // http module exceptions manually in Angular's ErrorHandler and we don't want it to capture the same error twice.
  // Please note that TryCatch configuration requires at least @sentry/browser v5.16.0.
  integrations: [new Sentry.Integrations.TryCatch({
    XMLHttpRequest: false,
  })],
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() { }

  extractError(error) {
    // Try to unwrap zone.js error.
    // https://github.com/angular/angular/blob/master/packages/core/src/util/errors.ts
    if (error && error.ngOriginalError) {
      error = error.ngOriginalError;
    }

    // We can handle messages and Error objects directly.
    if (typeof error === "string" || error instanceof Error) {
      return error;
    }

    // If it's http module error, extract as much information from it as we can.
    if (error instanceof HttpErrorResponse) {
      // The `error` property of http exception can be either an `Error` object, which we can use directly...
      if (error.error instanceof Error) {
        return error.error;
      }

      // ... or an`ErrorEvent`, which can provide us with the message but no stack...
      if (error.error instanceof ErrorEvent) {
        return error.error.message;
      }

      // ...or the request body itself, which we can use as a message instead.
      if (typeof error.error === "string") {
        return `Server returned code ${error.status} with body "${error.error}"`;
      }

      // If we don't have any detailed information, fallback to the request message itself.
      return error.message;
    }

    // Skip if there's no error, and let user decide what to do with it.
    return null;
  }

  handleError(error) {
    let extractedError = this.extractError(error) || "Handled unknown error";

    // Capture handled exception and send it to Sentry.
    const eventId = Sentry.captureException(extractedError);

    // When in development mode, log the error to console for immediate feedback.
    if (!environment.production) {
      console.error(extractedError);
    }

    // Optionally show user dialog to provide details on what happened.
    Sentry.showReportDialog({ eventId });
  }
}
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    ConfigComponent,
    CategoryComponent,
    NasaComponent,
    MessagesComponent,
    CreateRegisterOpenerComponent,
    MomentSearchComponent,
    CreateCategoryOpenerComponent,
    LoginComponent,
    CategoryDetailsComponent,
    RegisterComponent,
    MenuListCategoryComponent,
    CategoryViewComponent,
    HeaderComponent,
    EditMomentViewComponent,
    EditMomentOpenerComponent
  ],
  providers: [
    AuthService,
    HttpErrorHandler,
    MessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders,
    RouterService,
    AuthenticationService
    , NasaService
    , UserprofileService
    , CategoryService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    EditMomentViewComponent
    , RegisterComponent
    , CategoryComponent
  ]
})
export class AppModule { }

