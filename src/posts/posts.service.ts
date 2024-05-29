import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  // The one I want to try RLS on
  findOne(id: number) {
    return this.prisma.post.findFirst({
      where: { id },
    });
  }
}
