import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.task.deleteMany();
  await prisma.task.createMany({
    data: [
      { title: 'Buy groceries', completed: false },
      { title: 'Finish homework', completed: true },
      { title: 'Call mom', completed: false }
    ]
  });
  console.log('Seed complete');
}
main().catch(e=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect());
