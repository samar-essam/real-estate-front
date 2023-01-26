import { HttpErrorResponse } from '@angular/common/http';
import { ToasterService } from './../services/toaster.service';
import { IUser } from './../../shared/models/user';
import { IRole } from './../../shared/models/role';
import { APIResponse } from './../../shared/ResponseObject';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from './../http/api.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  private user = 'user-data';
  private token = 'user-token';
  private transformedData: IUser = Object(null);
  constructor(
    private apiService: ApiService,
    private router: Router,
    private toastr: ToasterService
  ) {}

  isAuthenticated(): boolean {
    return this.accessToken ? true : false;
  }

  /**
   * Get stored Access Token
   */
  get accessToken(): string {
    return localStorage.getItem(this.token) as string;
  }

  get userData(): IUser {
    return JSON.parse(localStorage.getItem(this.user) || '{}');
  }

  get userRole(): string {
    return this.userData.role || '';
  }

  /**
   * Method to check for user role and give permission on specific routes
   * @param roleId : Role id got from user object stored in localstorage
   * @returns : Observable of type string
   */

  checkUserRole(roleId: string): Observable<APIResponse<IRole>> {
    return this.apiService.get({
      path: `getRole/${roleId}`,
    });
  }

  // Create interface for logged user
  /**
   * login with email, password
   * @param email : user email
   * @param password : user password
   */
  login(email: string, password: string) {
    /**
     * @tap : operator used to perform a task on the emitted data without modifing it
     */
    return this.apiService
      .post({
        path: 'user/login',
        payload: { email, password },
      })
      .pipe(
        map((res) => res.payload),
        tap((user) => this.setLocalStorage(user))
      );
  }

  /**
   * Method used to logout user by clear the local storage
   * Logout should send a request to remove all tokens for the user
   */
  logout() {
    console.log(this.userData);
    this.apiService
      .post({ path: 'user/logout', payload: this.userData })
      .subscribe({
        next: (res) => {
          this.router.navigate(['login']);
          localStorage.clear();
        },
        error: (err) => {
          if (err instanceof HttpErrorResponse) {
            this.toastr.toast({ type: 'error', msg: err.error.message });
          } else this.toastr.toast({ type: 'error', msg: err });
        },
      });
  }

  /**
   * Method used to set data in browser local storage
   * @param user : the logged in user / admin
   */
  private setLocalStorage(payload: any) {
    const { data, token } = payload;
    localStorage.setItem(this.user, JSON.stringify(data));
    localStorage.setItem(this.token, token);
  }

  /**
   * Method to patch role value
   * @param role : role value came from user object stored in local storage
   */
  patchRoleValue(role: string) {
    this.transformedData = JSON.parse(localStorage.getItem(this.user) || '{}');
    this.transformedData['roleValue'] = role;
    localStorage.setItem(this.user, JSON.stringify(this.transformedData));
  }
}
