import db from './db';
import bcrypt from 'bcryptjs';

export interface User {
  email: string;
  password: string; // hashed password
}

export function findUser(email: string): User | undefined {
  const row = db
    .prepare('SELECT email, password FROM users WHERE email = ?')
    .get(email) as User | undefined;
  return row;
}

export function registerUser(email: string, password: string) {
  if (findUser(email)) {
    throw new Error('User already exists');
  }
  const hashed = bcrypt.hashSync(password, 10);
  db.prepare('INSERT INTO users (email, password) VALUES (?, ?)').run(email, hashed);
}
