import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

export interface Education {
  id: string;
  school: string;
  degree: string;
  start: string;
  end: string;
}

const dataFile = path.join(process.cwd(), 'data', 'education.json');

async function readEducation(): Promise<Education[]> {
  try {
    const data = await fs.readFile(dataFile, 'utf-8');
    return JSON.parse(data) as Education[];
  } catch {
    return [];
  }
}

async function writeEducation(education: Education[]) {
  await fs.writeFile(dataFile, JSON.stringify(education, null, 2));
}

export async function getEducation(): Promise<Education[]> {
  return readEducation();
}

export async function addEducation(entry: Omit<Education, 'id'>): Promise<Education> {
  const education = await readEducation();
  const newEntry: Education = { id: randomUUID(), ...entry };
  education.push(newEntry);
  await writeEducation(education);
  return newEntry;
}

export async function deleteEducation(id: string) {
  const education = (await readEducation()).filter((e) => e.id !== id);
  await writeEducation(education);
}
