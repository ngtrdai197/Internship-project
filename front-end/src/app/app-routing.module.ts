import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from 'src/@shared/layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomepageComponent },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'admin', loadChildren: './manager/manager.module#ManagerModule' },
  // {
  //   path: 'home', component: LayoutComponent, children: [
  //     { path: '', component: HomepageComponent }
  //   ]
  // },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
