import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  cover: string;
  live?: string;
  repo?: string;
}

const dataFile = path.join(process.cwd(), 'data', 'projects.json');

function readProjects(): Project[] {
  try {
    const data = fs.readFileSync(dataFile, 'utf-8');
    return JSON.parse(data) as Project[];
  } catch {
    return [];
  }
}

function writeProjects(projects: Project[]) {
  fs.writeFileSync(dataFile, JSON.stringify(projects, null, 2));
}

export function getProjects(): Project[] {
  return readProjects();
}

export function addProject(project: Omit<Project, 'id'>): Project {
  const projects = readProjects();
  const newProject: Project = { id: randomUUID(), ...project };
  projects.push(newProject);
  writeProjects(projects);
  return newProject;
}

export function deleteProject(id: string) {
  const projects = readProjects().filter((p) => p.id !== id);
  writeProjects(projects);
}
