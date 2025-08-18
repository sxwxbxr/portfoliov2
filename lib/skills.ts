import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

export interface Skill {
  id: string;
  group: string;
  items: string[];
}

const dataFile = path.join(process.cwd(), 'data', 'skills.json');

function readSkills(): Skill[] {
  try {
    const data = fs.readFileSync(dataFile, 'utf-8');
    return JSON.parse(data) as Skill[];
  } catch {
    return [];
  }
}

function writeSkills(skills: Skill[]) {
  fs.writeFileSync(dataFile, JSON.stringify(skills, null, 2));
}

export function getSkills(): Skill[] {
  return readSkills();
}

export function addSkill(skill: Omit<Skill, 'id'>): Skill {
  const skills = readSkills();
  const newSkill: Skill = { id: randomUUID(), ...skill };
  skills.push(newSkill);
  writeSkills(skills);
  return newSkill;
}

export function deleteSkill(id: string) {
  const skills = readSkills().filter((s) => s.id !== id);
  writeSkills(skills);
}
