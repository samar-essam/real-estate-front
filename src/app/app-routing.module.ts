import { AuthGuard } from './core/gurads/auth/auth.guard';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from './core/gurads/role.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/landing/landing.module').then(
            (m) => m.LandingModule
          ),
      },
      {
        path: 'admin-panel',
        canActivate: [RoleGuard],
        loadChildren: () =>
          import('./modules/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
