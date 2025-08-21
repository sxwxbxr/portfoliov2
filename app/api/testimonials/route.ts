import { NextResponse } from 'next/server';
import { getTestimonials, addTestimonial, deleteTestimonial } from '../../../lib/testimonials';

export async function GET() {
  return NextResponse.json(await getTestimonials());
}

export async function POST(request: Request) {
  const data = await request.json();
  const testimonial = await addTestimonial(data);
  return NextResponse.json(testimonial, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await deleteTestimonial(id);
  return NextResponse.json({ success: true });
}
