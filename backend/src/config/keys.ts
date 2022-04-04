import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';

export const typeOrmOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'mcatestdb',
  entities: [User],
  synchronize: false,
};

export const portNumber = 3001;
