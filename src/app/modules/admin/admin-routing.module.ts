import { UserManageComponent } from './landing/users/user-manage/user-manage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './landing/users/users.component';
import { UserProfileComponent } from './landing/users/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'user-manage',
        component: UserManageComponent,
      },
      {
        path: 'user-manage/:id',
        component: UserManageComponent,
      },
      {
        path: 'user-profile/:id',
        component: UserProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
})
export class AdminRoutingModule {}
