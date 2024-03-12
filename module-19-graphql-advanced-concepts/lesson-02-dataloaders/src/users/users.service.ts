import { Injectable } from '@nestjs/common';

import { delay } from '../util';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alex' },
    { id: 4, name: 'Anna' },
  ];

  async getUsers() {
    console.log('Getting users...');
    await delay(3000);
    return this.users;
  }

  async getUser(id: number) {
    console.log(`FETCHING DATA FROM DB: Getting user with id ${id}...`);
    await delay(1000);
    return this.users.find((user) => user.id === id);
  }

  async getUsersByIds(ids: readonly number[]) {
    console.log(`Getting users with ids (${ids.join(',')})`);
    await delay(1000);
    return this.users.filter((u) => ids.includes(u.id));
  }
}
