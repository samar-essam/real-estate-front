import { Observable } from 'rxjs';
import { SidebarService } from './../sidebar/services/sidebar.service';
import { Component } from '@angular/core';
import { JwtService } from 'src/app/core/authentication/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  sideBarStatus: boolean = false;
  constructor(
    public jwt: JwtService,
    private sideBarService: SidebarService,
    public router: Router
  ) {
    this.sideBarService.getSideBarStatus().subscribe((value) => {
      this.sideBarStatus = value;
    });
  }

  toggleSideBar() {
    this.sideBarStatus
      ? this.sideBarService.openSideBar(false)
      : this.sideBarService.openSideBar(true);
  }
  logout() {
    this.jwt.logout();
  }
}
