import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class ToasterService {
  constructor(private ts: ToastrService) {}

  toast({ type, msg }: { type: string; msg: string }) {
    switch (type) {
      case 'error':
        this.ts.error(msg);
        break;
      case 'success':
        this.ts.success(msg);
        break;
      case 'warning':
        this.ts.warning(msg);
        break;
      default:
        break;
    }
  }
}
