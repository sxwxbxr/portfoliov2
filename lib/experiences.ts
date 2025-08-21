import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

export interface Experience {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
}

const dataFile = path.join(process.cwd(), 'data', 'experiences.json');

async function readExperiences(): Promise<Experience[]> {
  try {
    const data = await fs.readFile(dataFile, 'utf-8');
    return JSON.parse(data) as Experience[];
  } catch {
    return [];
  }
}

async function writeExperiences(experiences: Experience[]) {
  await fs.writeFile(dataFile, JSON.stringify(experiences, null, 2));
}

export async function getExperiences(): Promise<Experience[]> {
  return readExperiences();
}

export async function addExperience(exp: Omit<Experience, 'id'>): Promise<Experience> {
  const experiences = await readExperiences();
  const newExp: Experience = { id: randomUUID(), ...exp };
  experiences.push(newExp);
  await writeExperiences(experiences);
  return newExp;
}

export async function deleteExperience(id: string) {
  const experiences = (await readExperiences()).filter((e) => e.id !== id);
  await writeExperiences(experiences);
}
