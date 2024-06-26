import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  name: string;
}
