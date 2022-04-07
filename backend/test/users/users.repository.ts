import { EntityRepository, Repository } from 'typeorm';
import { User } from '../../src/users/user.entity';

/**
 * Custom user repository for Typeorm testing.
 */
@EntityRepository(User)
export class UserMockRepository extends Repository<User> {
  public readonly users: User[] = [
    {
      name: 'test1',
      age: 100,
      occupation: 'blank',
      date: new Date(),
      id: 0,
    },
  ];

  constructor(users?: User[]) {
    super();
    if (users) this.users = users;
  }
  find(): Promise<User[]> {
    return new Promise<User[]>(() => this.users);
  }
}
