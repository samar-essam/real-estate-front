import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalService {
  isOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);

  getModalStatus() {
    return this.isOpened.asObservable();
  }
  openModal() {
    this.isOpened.next(true);
  }

  closeModal() {
    this.isOpened.next(false);
  }
}
