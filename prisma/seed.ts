import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'a@a.com' },
    update: {},
    create: {
      email: 'a@a.com',
      name: 'A A',
      password: await bcrypt.hash('@Password091', 10),
      posts: {
        create: [
          {
            title: 'Post 1 for A',
            body: 'Hello world!',
          },
          {
            title: 'Post 2 for A',
            body: 'Hello Again',
          },
        ],
      },
    },
  });

  await prisma.user.upsert({
    where: { email: 'b@b.com' },
    update: {},
    create: {
      email: 'b@b.com',
      name: 'B B',
      password: await bcrypt.hash('@Password091', 10),
      posts: {
        create: [
          {
            title: 'Post 1 for B',
            body: 'Hello world from B',
          },
          {
            title: 'Post 2 for B',
            body: 'Hopefully RLS will stop "a" from hacking this post',
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
