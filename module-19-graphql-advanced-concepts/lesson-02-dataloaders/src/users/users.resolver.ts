import { Query, Resolver } from '@nestjs/graphql';

import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver(User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'users' })
  getUsers() {
    return this.usersService.getUsers();
  }
}
