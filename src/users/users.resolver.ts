import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}
  @Query((returns) => User)
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.getUser(id);
  }
}
