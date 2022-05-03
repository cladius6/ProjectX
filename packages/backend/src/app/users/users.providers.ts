import { User } from "./entities/user.entity";
import { Connection } from "typeorm";


// TODO: avoid magic string. Both USER_REPOSITORY and USER_REPOSITORY_TOKEN should be kept in a constant.ts file
export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];