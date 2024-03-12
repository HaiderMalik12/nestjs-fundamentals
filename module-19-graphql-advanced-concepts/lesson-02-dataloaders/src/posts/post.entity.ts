import { Field, ObjectType } from '@nestjs/graphql';

import { User } from '../users/user.entity';

@ObjectType()
export class Post {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  body: string;

  userId: number;

  @Field(() => User)
  createdBy?: User;
}
