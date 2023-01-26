import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { SidebarService } from 'src/app/shared/components/sidebar/services/sidebar.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  sidebarStatus$: Observable<boolean>;
  constructor(private sideBarService: SidebarService) {
    this.sidebarStatus$ = this.sideBarService.getSideBarStatus();
  }
}
