import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderManagerComponent } from './header-manager/header-manager.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dash-board', component: DashboardComponent }
]

@NgModule({
  declarations: [SideMenuComponent, HeaderManagerComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }
