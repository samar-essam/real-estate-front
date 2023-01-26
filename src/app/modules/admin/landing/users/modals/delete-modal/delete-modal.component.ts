import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/shared/models/user';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent {
  @Input() user: IUser | any = Object(null);
}
