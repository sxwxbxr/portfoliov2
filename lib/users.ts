import bcrypt from 'bcryptjs';
import prisma from './db';

export async function findUser(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function registerUser(
  email: string,
  password: string,
  role: 'admin' | 'user' = 'user'
) {
  const existing = await findUser(email);
  if (existing) {
    throw new Error('User already exists');
  }
  const hashed = bcrypt.hashSync(password, 10);
  await prisma.user.create({ data: { email, password: hashed, role } });
}
