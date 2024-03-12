import * as DataLoader from 'dataloader';

import { mapFromArray } from '../util';
import { User } from './user.entity';
import { UsersService } from './users.service';

export function createUsersLoader(usersService: UsersService) {
  return new DataLoader<number, User>(async (ids) => {
    const users = await usersService.getUsersByIds(ids);

    const usersMap = mapFromArray(users, (user) => user.id);

    console.log('usersMap', usersMap);
    const results = ids.map((id) => usersMap[id]);
    console.log('results', results);
    return results;
  });
}
