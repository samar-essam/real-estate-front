export class IUser {
  _id?: string;
  role?: string;
  roleValue?: string;
  fName?: string;
  lName?: string;
  age?: number;
  email?: string;
  status?: boolean;
  addresses?: [
    {
      _id: string;
      details: string;
    }
  ];
  createdAt?: string;
  updatedAt?: string;
}
