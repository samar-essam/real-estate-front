import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableComponent } from './table/table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToggleSliderComponent } from './toggle-slider/toggle-slider.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    LoaderComponent,
    SidebarComponent,
    TableComponent,
    ToggleSliderComponent,
    ModalComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule , FontAwesomeModule],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    LoaderComponent,
    SidebarComponent,
    TableComponent,
    ToggleSliderComponent,
    ModalComponent,
    NgbModule,
  ],
})
export class SharedModule {}
