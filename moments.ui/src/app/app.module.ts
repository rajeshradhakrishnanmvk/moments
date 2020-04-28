import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    RegisterComponent
    , CategoryComponent
  ]
})
export class AppModule { }

