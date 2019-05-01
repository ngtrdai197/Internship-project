import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, LayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, LayoutComponent]
})
export class SharedModule { }
