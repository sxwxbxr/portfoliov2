import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';

const dataFile = path.join(process.cwd(), 'data', 'users.json');

export interface User {
  email: string;
  password: string; // hashed password
}

function readUsers(): User[] {
  try {
    const data = fs.readFileSync(dataFile, 'utf-8');
    return JSON.parse(data) as User[];
  } catch {
    return [];
  }
}

function writeUsers(users: User[]) {
  fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));
}

export function findUser(email: string): User | undefined {
  const users = readUsers();
  return users.find((u) => u.email === email);
}

export function registerUser(email: string, password: string) {
  const users = readUsers();
  if (users.some((u) => u.email === email)) {
    throw new Error('User already exists');
  }
  const hashed = bcrypt.hashSync(password, 10);
  users.push({ email, password: hashed });
  writeUsers(users);
}
