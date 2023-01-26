import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { IActions } from '../../models/modal-actions';
import { ModalService } from './service/modal.service';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @ViewChild('openBtn')
  openBtn!: ElementRef<HTMLElement>;
  @Input() header: string = '';
  @Input() actions: IActions[] = Object(null);
  @Output() onAction = new EventEmitter<string>();
  constructor(
    private modalService: NgbModal,
    private ms: ModalService,
    config: NgbModalConfig
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    config.centered = true;
    ms.getModalStatus().subscribe((value) => {
      if (value) this.openBtn.nativeElement.click();
      else this.close();
    });
  }
  open(content: any) {
    this.modalService.open(content);
  }

  close() {
    this.modalService.dismissAll();
  }

  onClick(action: string) {
    this.onAction.emit(action);
  }
}
