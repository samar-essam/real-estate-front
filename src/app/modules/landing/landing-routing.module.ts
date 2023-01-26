import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
];

const routing: ModuleWithProviders<RouterModule>= RouterModule.forChild(routes);

@NgModule({
  imports: [routing],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
