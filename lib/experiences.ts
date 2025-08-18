import fs from 'fs';
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

function readExperiences(): Experience[] {
  try {
    const data = fs.readFileSync(dataFile, 'utf-8');
    return JSON.parse(data) as Experience[];
  } catch {
    return [];
  }
}

function writeExperiences(experiences: Experience[]) {
  fs.writeFileSync(dataFile, JSON.stringify(experiences, null, 2));
}

export function getExperiences(): Experience[] {
  return readExperiences();
}

export function addExperience(exp: Omit<Experience, 'id'>): Experience {
  const experiences = readExperiences();
  const newExp: Experience = { id: randomUUID(), ...exp };
  experiences.push(newExp);
  writeExperiences(experiences);
  return newExp;
}

export function deleteExperience(id: string) {
  const experiences = readExperiences().filter((e) => e.id !== id);
  writeExperiences(experiences);
}
