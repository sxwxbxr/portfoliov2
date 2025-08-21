import { NextResponse } from 'next/server';
import { getProjects, addProject, deleteProject } from '../../../lib/projects';

export async function GET() {
  return NextResponse.json(await getProjects());
}

export async function POST(request: Request) {
  const data = await request.json();
  const project = await addProject(data);
  return NextResponse.json(project, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await deleteProject(id);
  return NextResponse.json({ success: true });
}
