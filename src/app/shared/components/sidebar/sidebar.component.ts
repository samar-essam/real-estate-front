import { ISideBar } from './../../models/sidebar';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from './services/sidebar.service';
import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  private readonly iconPath: string = 'assets';
  sideBarStatus: boolean = false;
  sideBarLinks: ISideBar[] = [];
  constructor(private sideBarService: SidebarService) {
    this.sideBarService.getSideBarStatus().subscribe((value) => {
      this.sideBarStatus = value;
    });
  }

  ngOnInit(): void {
    this.sideBarLinks.push({
      display: 'Users',
      id: 'users',
      link: '/admin-panel/users',
      icon: faUserGroup,
      childrens: [
        {
          display: 'user-profile',
          id: 'profile',
        },
      ],
    });
  }
  toggleSideBar() {
    this.sideBarStatus
      ? this.sideBarService.openSideBar(false)
      : this.sideBarService.openSideBar(true);
  }
}
