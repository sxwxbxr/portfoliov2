import { NextResponse } from 'next/server';
import { getSkills, addSkill, deleteSkill } from '../../../lib/skills';

export function GET() {
  return NextResponse.json(getSkills());
}

export async function POST(request: Request) {
  const data = await request.json();
  const skill = addSkill(data);
  return NextResponse.json(skill, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  deleteSkill(id);
  return NextResponse.json({ success: true });
}
