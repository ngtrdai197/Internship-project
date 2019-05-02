import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderManagerComponent } from './header-manager/header-manager.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashUserComponent } from './dash-user/dash-user.component';
import { DashProductComponent } from './dash-product/dash-product.component';

const routes: Routes = [
  {
    path: 'dash-board', component: DashboardComponent, children: [
      { path: '', redirectTo: 'management-user', pathMatch: 'full' },
      { path: 'management-user', component: DashUserComponent },
      { path: 'management-product', component: DashProductComponent }
    ]
  }
]

@NgModule({
  declarations: [
    SideMenuComponent, HeaderManagerComponent,
    DashboardComponent, DashboardContentComponent,
    DashUserComponent, DashProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }
