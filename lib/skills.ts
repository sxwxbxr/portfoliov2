import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

export interface Skill {
  id: string;
  group: string;
  items: string[];
}

const dataFile = path.join(process.cwd(), 'data', 'skills.json');

async function readSkills(): Promise<Skill[]> {
  try {
    const data = await fs.readFile(dataFile, 'utf-8');
    return JSON.parse(data) as Skill[];
  } catch {
    return [];
  }
}

async function writeSkills(skills: Skill[]) {
  await fs.writeFile(dataFile, JSON.stringify(skills, null, 2));
}

export async function getSkills(): Promise<Skill[]> {
  return readSkills();
}

export async function addSkill(skill: Omit<Skill, 'id'>): Promise<Skill> {
  const skills = await readSkills();
  const newSkill: Skill = { id: randomUUID(), ...skill };
  skills.push(newSkill);
  await writeSkills(skills);
  return newSkill;
}

export async function deleteSkill(id: string) {
  const skills = (await readSkills()).filter((s) => s.id !== id);
  await writeSkills(skills);
}
