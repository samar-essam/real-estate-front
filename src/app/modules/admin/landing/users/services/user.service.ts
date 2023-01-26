import { APIResponse } from './../../../../../shared/ResponseObject';
import { map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { IUser } from 'src/app/shared/models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private apiService: ApiService) {}

  getAllUsers() {
    return this.apiService.get({ path: 'user/getAll' });
  }

  getUserInstance(args: { [key: string]: string }) {
    return this.apiService.get({ path: `user/single/${args['id']}` }).pipe(
      map((res) => {
        return {
          _id: res.payload?.data._id,
          fName: res.payload?.data.fName,
          lName: res.payload?.data.lName,
          email: res.payload?.data.email,
          status: res.payload?.data.status,
          addresses: res.payload?.data.addresses,
        };
      })
    );
  }

  editUser(args: { [key: string]: string }, user: IUser) {
    return this.apiService.patch({
      path: `user/edit/${args['id']}`,
      payload: user,
    });
  }

  addUser(user: IUser) {
    return this.apiService.post({ path: 'user/register', payload: user });
  }

  deleteUser(args: { [key: string]: string }) {
    return this.apiService.delete({ path: `user/delete/${args['id']}` });
  }
}
