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

export interface CreateUserInterfaceRequest {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
}

export interface CreateUserInterfaceResponse {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: Date;
}
