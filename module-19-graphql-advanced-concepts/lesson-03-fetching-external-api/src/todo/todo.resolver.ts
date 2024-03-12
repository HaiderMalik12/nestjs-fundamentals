import { Context, Resolver } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

@Resolver()
export class TodoResolver {
  @Query('todos')
  async getTodods(
    @Context('dataSources')
    dataSources,
  ) {
    return dataSources().todoAPI.getTodos();
  }
}
