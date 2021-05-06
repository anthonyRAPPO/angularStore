import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { NaviguationMenuComponent } from './naviguation-menu/naviguation-menu.component';


@NgModule({
  declarations: [
    ProfileComponent,
    LogoutComponent,
    NaviguationMenuComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
