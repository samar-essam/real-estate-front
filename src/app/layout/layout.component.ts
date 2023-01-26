import { GlobalService } from './../core/global/global.service';
import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements AfterContentChecked {
  loading$: Observable<boolean>;

  constructor(private global: GlobalService, private cdref: ChangeDetectorRef , public router : Router) {
    this.loading$ = this.global.getLoading();
  }
  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }
}
