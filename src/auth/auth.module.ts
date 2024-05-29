import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret-key-todo-replace',
    }),
  ],
  providers: [PrismaService, JwtStrategy, AuthService, AuthResolver],
  exports: [JwtStrategy, JwtModule],
})
export class AuthModule {}
