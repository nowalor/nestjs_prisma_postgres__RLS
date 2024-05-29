import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { LoginResponse } from './entity/login.response.entity';
import { LoginInput } from './dto/login.input';
import { AuthService } from './auth.service';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  async login(@Args('payload') dto: LoginInput) {
    return this.authService.login(dto);
  }
}
