import { NextResponse } from 'next/server';
import { getExperiences, addExperience, deleteExperience } from '../../../lib/experiences';

export function GET() {
  return NextResponse.json(getExperiences());
}

export async function POST(request: Request) {
  const data = await request.json();
  const exp = addExperience(data);
  return NextResponse.json(exp, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  deleteExperience(id);
  return NextResponse.json({ success: true });
}
