import { promises as fs } from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
}

const dataFile = path.join(process.cwd(), 'data', 'testimonials.json');

async function readTestimonials(): Promise<Testimonial[]> {
  try {
    const data = await fs.readFile(dataFile, 'utf-8');
    return JSON.parse(data) as Testimonial[];
  } catch {
    return [];
  }
}

async function writeTestimonials(testimonials: Testimonial[]) {
  await fs.writeFile(dataFile, JSON.stringify(testimonials, null, 2));
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return readTestimonials();
}

export async function addTestimonial(t: Omit<Testimonial, 'id'>): Promise<Testimonial> {
  const testimonials = await readTestimonials();
  const newT: Testimonial = { id: randomUUID(), ...t };
  testimonials.push(newT);
  await writeTestimonials(testimonials);
  return newT;
}

export async function deleteTestimonial(id: string) {
  const testimonials = (await readTestimonials()).filter((t) => t.id !== id);
  await writeTestimonials(testimonials);
}
