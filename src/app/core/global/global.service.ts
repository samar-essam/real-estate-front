import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GlobalService {
  loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  setLoading(value: boolean) {
    this.loading.next(value);
  }

  getLoading() {
    return this.loading.asObservable();
  }
}
