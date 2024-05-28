import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get()
  getHello(): any {
    return this.prisma.user.findMany();
  }
}
