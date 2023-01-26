import { Column } from './../../../../shared/components/table/models/column';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableData } from 'src/app/shared/components/table/models/tableData';
import { UserService } from './services/user.service';
import { map } from 'rxjs';
import { IUser } from 'src/app/shared/models/user';
import { Router } from '@angular/router';
import { IActions } from 'src/app/shared/models/modal-actions';
import { ModalService } from 'src/app/shared/components/modal/service/modal.service';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @ViewChild('deleteModal') deleteModal: any;
  tableData: TableData<any> = Object(null);
  selectedUser: any;
  public readonly modalActions: IActions[] = [
    {
      display: 'Delete',
      action: 'delete',
      styleClass: 'btn btn-primary',
    },
    {
      display: 'Cancel',
      action: 'cancel',
      styleClass: 'btn btn-outline-primary',
    },
  ];
  constructor(
    private userService: UserService,
    private router: Router,
    private modalService: ModalService,
    private toaster: ToasterService
  ) {}
  ngOnInit() {
    this.tableData = this.createTable();
    this.initData();
  }

  private createTable() {
    return new TableData({
      columns: {
        name: {
          name: 'Name',
          type: 'hyperlink',
          order: 0,
          state: '/admin-panel/user-profile',
        },
        email: {
          name: 'Email',
          type: 'email',
          order: 1,
        },
        createdAt: {
          name: 'Created At',
          type: 'date',
          order: 2,
        },
        updatedAt: {
          name: 'Updated At',
          type: 'date',
          order: 3,
        },
        status: {
          name: 'Status',
          type: 'status',
          order: 4,
        },
        actions: {
          name: 'Actions',
          type: 'actions',
          order: 5,
          options: ['Edit', 'Delete'],
        },
      },
    });
  }

  private initData() {
    this.userService
      .getAllUsers()
      .pipe(
        map(({ payload }) => {
          this.tableData.rows = payload?.data?.map((user: IUser) => ({
            _id: user._id,
            name: {
              display: user.fName + ' ' + user.lName,
              _id: user._id,
            },
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            status: user.status ? 'Enabled' : 'Disabled',
          }));
        })
      )
      .subscribe();
  }

  onEdit(row: any) {
    this.router.navigate(['/admin-panel/user-manage', row._id]);
  }

  onDelete(row: any) {
    this.selectedUser = row._id;
    this.deleteModal.user = JSON.parse(JSON.stringify(row));
    this.modalService.openModal();
  }

  handleAction(action: string) {
    if (action == 'delete') {
      this.deleteUser();
    } else {
      this.modalService.closeModal();
    }
  }

  private deleteUser() {
    this.userService.deleteUser({ id: this.selectedUser }).subscribe({
      next: (res) => {
        this.toaster.toast({ type: 'success', msg: res.message || '' });
        console.log(res);
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          this.toaster.toast({ type: 'error', msg: err.error.message });
        } else this.toaster.toast({ type: 'error', msg: err });
      },
    });
  }
}
