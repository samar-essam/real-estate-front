import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToasterService } from 'src/app/core/services/toaster.service';
import { IUser } from 'src/app/shared/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css'],
})
export class UserManageComponent implements OnInit {
  isToggled: boolean = false;
  userForm: FormGroup = Object(null);
  mode: 'edit' | 'create' = 'create';
  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    activatedRoute: ActivatedRoute,
    private toaster: ToasterService,
    private router: Router
  ) {
    // Used to get the id to check if mode is edit for create
    const id = activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.mode = 'edit';
      this.getUser(id);
    } else {
      this.mode = 'create';
    }
  }

  ngOnInit(): void {
    // Init user form
    this.userForm = this.fb.group({
      _id: [''],
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // role: ['', Validators.required],
      status: [false],
      addresses: this.fb.array([]),
    });
    if (this.mode == 'create') this.addAddress();
  }

  /**
   * Getter to get the address control as a FormArray
   */
  get address(): FormArray {
    return this.userForm?.get('addresses') as FormArray;
  }
  get areas(): FormArray {
    return this.userForm?.get('areas') as FormArray;
  }

  /**
   * @returns : Returns addresses controls
   */

  getAddressControls() {
    return (this.userForm.get('addresses') as FormArray).controls;
  }

  /**
   * Method used to push controls inside address formArray
   * Only 4 address controls are allowed
   */
  addAddress() {
    if (this.address.length < 4) {
      this.address.push(
        this.fb.group({
          details: ['', Validators.required],
        })
      );
    } else return;
  }
  /**
   * Method used to delete form control from a formArray
   * @param index : Control index
   */
  deleteAddress(index: number) {
    this.address.removeAt(index);
  }

  /**
   * Method to get user data to patch form values in edit mode
   * @param id : Selected user id
   */
  getUser(id: string) {
    this.userService.getUserInstance({ id: id }).subscribe((res) => {
      this.patchUserForm(res);
    });
  }

  private patchUserForm(user: IUser) {
    this.userForm.patchValue({
      _id: user._id,
      fName: user.fName,
      lName: user.lName,
      email: user.email,
      status: user.status,
    });
    this.isToggled = user.status || false;

    user.addresses?.forEach((address) => {
      this.address.push(
        this.fb.group({
          _id: address._id,
          details: address.details,
        })
      );
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      console.log(this.userForm);
      console.log('invalid');
      return;
    } else {
      if (this.mode == 'create') {
        this.addUser();
      } else {
        this.editUser();
      }
    }
  }

  private addUser() {
    const formValue = this.userForm.getRawValue();
    delete formValue._id;
    this.userService.addUser(formValue).subscribe((res) => {
      console.log(res);
    });
  }

  private editUser() {
    const userId = this.userForm.get('_id')?.value;
    const formValue = this.userForm.getRawValue();
    delete formValue._id;
    this.userService.editUser({ id: userId }, formValue).subscribe({
      next: (res) => {
        this.toaster.toast({ type: 'success', msg: res.message || '' });
        this.router.navigate(['/admin-panel/users']);
      },
      error: (err) => {
        if (err instanceof HttpErrorResponse) {
          this.toaster.toast({ type: 'error', msg: err.error.message });
        } else this.toaster.toast({ type: 'error', msg: err });
      },
    });
  }

  /**
   * Used to toggle status value
   */
  toggleStatus() {
    this.isToggled = !this.isToggled;
    this.userForm.patchValue({
      status: this.isToggled,
    });
  }
}
