import fs from 'fs';
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

function readEducation(): Education[] {
  try {
    const data = fs.readFileSync(dataFile, 'utf-8');
    return JSON.parse(data) as Education[];
  } catch {
    return [];
  }
}

function writeEducation(education: Education[]) {
  fs.writeFileSync(dataFile, JSON.stringify(education, null, 2));
}

export function getEducation(): Education[] {
  return readEducation();
}

export function addEducation(entry: Omit<Education, 'id'>): Education {
  const education = readEducation();
  const newEntry: Education = { id: randomUUID(), ...entry };
  education.push(newEntry);
  writeEducation(education);
  return newEntry;
}

export function deleteEducation(id: string) {
  const education = readEducation().filter((e) => e.id !== id);
  writeEducation(education);
}
