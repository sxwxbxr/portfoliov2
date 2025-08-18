import fs from 'fs';
import path from 'path';
import { randomUUID } from 'crypto';

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
}

const dataFile = path.join(process.cwd(), 'data', 'testimonials.json');

function readTestimonials(): Testimonial[] {
  try {
    const data = fs.readFileSync(dataFile, 'utf-8');
    return JSON.parse(data) as Testimonial[];
  } catch {
    return [];
  }
}

function writeTestimonials(testimonials: Testimonial[]) {
  fs.writeFileSync(dataFile, JSON.stringify(testimonials, null, 2));
}

export function getTestimonials(): Testimonial[] {
  return readTestimonials();
}

export function addTestimonial(t: Omit<Testimonial, 'id'>): Testimonial {
  const testimonials = readTestimonials();
  const newT: Testimonial = { id: randomUUID(), ...t };
  testimonials.push(newT);
  writeTestimonials(testimonials);
  return newT;
}

export function deleteTestimonial(id: string) {
  const testimonials = readTestimonials().filter((t) => t.id !== id);
  writeTestimonials(testimonials);
}
