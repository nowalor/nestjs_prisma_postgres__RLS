import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret-key-todo-replace',
    }),
  ],
  providers: [PrismaService, JwtStrategy],
  exports: [JwtStrategy, JwtModule],
})
export class AuthModule {}
