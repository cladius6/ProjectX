export interface IUser {
  id: string;
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateUserInterfaceRequest {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface ICreateUserInterfaceResponse {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: Date;
}
