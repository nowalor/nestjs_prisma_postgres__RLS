import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.entity';

/*@Resolver()
export class UsersResolver {
  @Query((returns) => User)
  async user() {
    return {};
  }
} */

@Resolver()
export class FooResolver {
  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
