import { Resolver } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { LoginInput } from './dto/login.input';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginInput) {
    console.log(this.prisma);

    const { email, password } = dto;
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    const isMatch = bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { msg: 'not a match' }; // TODO
    }

    const token = this.jwtService.sign({
      sub: user.id,
      email: user.email,
      name: user.name,
    });

    return { success: true, token };
  }
}
