import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUser(id: number) {
    return this.prisma.user.findFirst({
      where: { id },
    });
  }
}
