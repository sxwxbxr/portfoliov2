import { NextResponse } from 'next/server';
import { getTestimonials, addTestimonial, deleteTestimonial } from '../../../lib/testimonials';

export function GET() {
  return NextResponse.json(getTestimonials());
}

export async function POST(request: Request) {
  const data = await request.json();
  const testimonial = addTestimonial(data);
  return NextResponse.json(testimonial, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  deleteTestimonial(id);
  return NextResponse.json({ success: true });
}
