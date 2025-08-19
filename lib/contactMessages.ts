import prisma from './db';

export async function createMessage(data: {
  name: string;
  email: string;
  message: string;
}) {
  return prisma.contactMessage.create({ data });
}

export async function getMessages() {
  return prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export async function deleteMessage(id: number) {
  return prisma.contactMessage.delete({ where: { id } });
}
