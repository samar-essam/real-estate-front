import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/components/shared.module';
import { httpProviders } from './core/interceptors/interceptors.providers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, LayoutComponent],
  providers: [httpProviders],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
  ],
})
export class AppModule {}
