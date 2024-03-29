import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderManagerComponent } from './header-manager/header-manager.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { DashUserComponent } from './dash-user/dash-user.component';
import { DashProductComponent } from './dash-product/dash-product.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogDashUserComponent } from './dialog-dash-user/dialog-dash-user.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { DashCategoryComponent } from './dash-category/dash-category.component';
import { DialogDashCategoryComponent } from './dialog-dash-category/dialog-dash-category.component';
import { DialogDashProductComponent } from './dialog-dash-product/dialog-dash-product.component';
import { SharedModule } from 'src/@shared/shared.module';


const routes: Routes = [
  {
    path: 'dash-board', component: DashboardComponent, children: [
      { path: '', redirectTo: 'management-user', pathMatch: 'full' },
      { path: 'management-user', component: DashUserComponent, data: { animation: 'Dash-User' } },
      { path: 'management-product', component: DashProductComponent, data: { animation: 'Dash-Product' } },
      { path: 'management-category', component: DashCategoryComponent },
    ]
  }
]

@NgModule({
  declarations: [
    SideMenuComponent, HeaderManagerComponent,
    DashboardComponent, DashboardContentComponent,
    DashUserComponent, DashProductComponent,
    DialogDashUserComponent, DashCategoryComponent,
    DialogDashCategoryComponent, DialogDashProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatOptionModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    DialogDashUserComponent,
    DialogDashCategoryComponent,
    DialogDashProductComponent
  ]
})
export class ManagerModule { }
