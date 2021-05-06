import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerHomeComponent } from './manager-home/manager-home.component';
//import {Routes} from '@angular/router'
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { MaterialModule } from '../material.module';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component';

//export const managerModuleRoutes: Routes = [{path:'',component:ManagerHomeComponent}] //eager


@NgModule({
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    ReceiptLookupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
