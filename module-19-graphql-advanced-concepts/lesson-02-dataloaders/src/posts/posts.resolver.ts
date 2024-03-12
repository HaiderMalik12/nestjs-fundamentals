import { Context, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import * as DataLoader from 'dataloader';

import { User } from '../users/user.entity';
import { Post } from './post.entity';
import { PostsService } from './posts.service';
import { UsersService } from 'src/users/users.service';

@Resolver(Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService, private userService: UsersService) {}

  @Query(() => [Post], { name: 'posts' })
  getPosts() {
    return this.postsService.getPosts();
  }

  @ResolveField('createdBy', () => User)
  getCreatedBy(
    @Parent() post: Post,
    @Context('usersLoader') usersLoader: DataLoader<number, User>,
  ) {
    const { userId } = post;
    return usersLoader.load(userId);
    // return this.userService.getUser(userId);
  }
}
