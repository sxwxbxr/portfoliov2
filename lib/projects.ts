import { promises as fs } from 'fs';
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

async function readProjects(): Promise<Project[]> {
  try {
    const data = await fs.readFile(dataFile, 'utf-8');
    return JSON.parse(data) as Project[];
  } catch {
    return [];
  }
}

async function writeProjects(projects: Project[]) {
  await fs.writeFile(dataFile, JSON.stringify(projects, null, 2));
}

export async function getProjects(): Promise<Project[]> {
  return readProjects();
}

export async function addProject(project: Omit<Project, 'id'>): Promise<Project> {
  const projects = await readProjects();
  const newProject: Project = { id: randomUUID(), ...project };
  projects.push(newProject);
  await writeProjects(projects);
  return newProject;
}

export async function deleteProject(id: string) {
  const projects = (await readProjects()).filter((p) => p.id !== id);
  await writeProjects(projects);
}
