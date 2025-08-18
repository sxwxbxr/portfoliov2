import bcrypt from 'bcryptjs';
import { User } from '@prisma/client';
import prisma from './prisma';

export async function findUser(email: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { email } });
}

export async function registerUser(email: string, password: string, role?: string) {
  const existing = await findUser(email);
  if (existing) {
    throw new Error('User already exists');
  }
  const hashed = await bcrypt.hash(password, 10);
  await prisma.user.create({ data: { email, hashedPassword: hashed, role } });
}
