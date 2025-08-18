import { NextResponse } from 'next/server';
import { getEducation, addEducation, deleteEducation } from '../../../lib/education';

export function GET() {
  return NextResponse.json(getEducation());
}

export async function POST(request: Request) {
  const data = await request.json();
  const entry = addEducation(data);
  return NextResponse.json(entry, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  deleteEducation(id);
  return NextResponse.json({ success: true });
}
