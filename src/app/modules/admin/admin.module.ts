import { SharedModule } from './../../shared/components/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { UsersComponent } from './landing/users/users.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { UserManageComponent } from './landing/users/user-manage/user-manage.component';
import { UserProfileComponent } from './landing/users/user-profile/user-profile.component';
import { DeleteModalComponent } from './landing/users/modals/delete-modal/delete-modal.component';

@NgModule({
  declarations: [LandingComponent, UsersComponent, UserManageComponent, UserProfileComponent, DeleteModalComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule,
    RouterModule
  ],
})
export class AdminModule {}
