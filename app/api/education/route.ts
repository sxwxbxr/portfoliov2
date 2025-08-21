import { NextResponse } from 'next/server';
import { getEducation, addEducation, deleteEducation } from '../../../lib/education';

export async function GET() {
  return NextResponse.json(await getEducation());
}

export async function POST(request: Request) {
  const data = await request.json();
  const entry = await addEducation(data);
  return NextResponse.json(entry, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await deleteEducation(id);
  return NextResponse.json({ success: true });
}
