import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  sideBarStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  openSideBar(value : boolean) {
    this.sideBarStatus.next(value);
  }

  closeSideBar(value : boolean) {
    this.sideBarStatus.next(value);
  }

  getSideBarStatus() {
    return this.sideBarStatus.asObservable();
  }
}
