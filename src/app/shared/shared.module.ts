import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationComponent } from './header-navigation/navigation.component';



@NgModule({
  declarations: [ SidebarComponent, NavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent, NavigationComponent
  ]
})
export class SharedModule { }
