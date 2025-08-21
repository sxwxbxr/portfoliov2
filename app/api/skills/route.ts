import { NextResponse } from 'next/server';
import { getSkills, addSkill, deleteSkill } from '../../../lib/skills';

export async function GET() {
  return NextResponse.json(await getSkills());
}

export async function POST(request: Request) {
  const data = await request.json();
  const skill = await addSkill(data);
  return NextResponse.json(skill, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await deleteSkill(id);
  return NextResponse.json({ success: true });
}
