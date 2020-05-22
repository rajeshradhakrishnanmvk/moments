import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateRegisterOpenerComponent } from './create-register-opener/create-register-opener.component';
import { CreateCategoryOpenerComponent } from './create-category-opener/create-category-opener.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { MomentSearchComponent } from './moment-search/moment-search.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { NasaComponent } from './nasa/nasa.component';
import { EditMomentOpenerComponent } from './edit-moment-opener/edit-moment-opener.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'user/:userId/edit',
        component: CreateRegisterOpenerComponent, outlet: `userEditOutlet`
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'category',
    children: [
      {
        path: 'category/:categoryId',
        component: CreateCategoryOpenerComponent, outlet: `categoryEditOutlet`
      }
    ]
  },
  {
    path: 'categorydetails',
    component: CategoryDetailsComponent
  },
  {
    path: 'category/:categoryId',
    component: CategoryViewComponent
  },
  {
    path: 'moments',
    component: MomentSearchComponent,
    canActivate: [CanActivateRouteGuard]
  }
  ,
  {
    path: 'space-moments',
    component: NasaComponent,
    canActivate: [CanActivateRouteGuard],
    children: [
      {
        path: 'moment/:momentId/edit',
        component: EditMomentOpenerComponent, outlet: `momentEditOutlet`
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateRouteGuard]
})

export class AppRoutingModule { }