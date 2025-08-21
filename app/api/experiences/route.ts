import { NextResponse } from 'next/server';
import { getExperiences, addExperience, deleteExperience } from '../../../lib/experiences';

export async function GET() {
  return NextResponse.json(await getExperiences());
}

export async function POST(request: Request) {
  const data = await request.json();
  const exp = await addExperience(data);
  return NextResponse.json(exp, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await deleteExperience(id);
  return NextResponse.json({ success: true });
}
