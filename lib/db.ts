import Database from 'better-sqlite3';
import path from 'path';
import { initDB } from './schema';

const dbPath = path.join(process.cwd(), 'data', 'portfolio.db');
const db = new Database(dbPath);

initDB(db);

export default db;
