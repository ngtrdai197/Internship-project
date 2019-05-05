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
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';


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
    DashUserComponent, DashProductComponent, DialogDashUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
  entryComponents: [DialogDashUserComponent]
})
export class ManagerModule { }
