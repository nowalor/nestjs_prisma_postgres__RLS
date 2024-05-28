import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  providers: [UsersResolver, UsersService, PrismaService],
})
export class UsersModule {}
