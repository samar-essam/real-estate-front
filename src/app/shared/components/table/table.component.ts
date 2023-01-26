import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  private readonly icons_path: string = 'assets/common/';
  public readonly icons = {
    edit: this.icons_path + 'edit.svg',
    delete: this.icons_path + 'delete.svg',
  };

  public readonly fontIcons = {
    edit: faEdit,
    delete: faTrashCan,
  };
  // Init tabledata
  _tableData: any;
  @Input() set tableData(tableData: any) {
    this._tableData = tableData;
  }
  get tableData(): any {
    return this._tableData;
  }
  // Init tabledata

  // Init Eventemitters
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  // Init Eventemitters
  columnOrder = (
    a: KeyValue<number, any>,
    b: KeyValue<number, any>
  ): number => {
    return a.value.order > b.value.order
      ? 1
      : b.value.order > a.value.order
      ? -1
      : 0;
  };

  onEditRow(row: any) {
    console.log(row);
    this.onEdit.emit(row);
  }

  onDeleteRow(row: any) {
    this.onDelete.emit(row);
  }
}
