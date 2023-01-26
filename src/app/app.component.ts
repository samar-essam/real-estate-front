import { ToasterService } from './core/services/toaster.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { read } from '@popperjs/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'final';
  constructor(private ts: ToasterService) {
    this.ts.toast({ type: 'success', msg: 'hello' });
  }
}
