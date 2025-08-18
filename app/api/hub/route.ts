import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function GET() {
  const posts = await prisma.post.findMany({
    include: { options: true },
    orderBy: { id: 'desc' },
  });
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const data = await request.json();
  const post = await prisma.post.create({
    data: {
      type: data.type,
      title: data.title,
      text: data.text,
      endDate: data.endDate ? new Date(data.endDate) : null,
      name: data.name,
      ip: data.ip,
      modpack: data.modpack,
      version: data.version,
      options: data.options
        ? {
            create: data.options.map((o: any) => ({ text: o.text, votes: o.votes ?? 0 })),
          }
        : undefined,
    },
    include: { options: true },
  });
  return NextResponse.json(post);
}

export async function PUT(request: Request) {
  const data = await request.json();
  const id = data.id;
  if (!id) {
    return NextResponse.json({ error: 'ID required' }, { status: 400 });
  }
  if (data.options) {
    await prisma.postOption.deleteMany({ where: { postId: id } });
  }
  const post = await prisma.post.update({
    where: { id },
    data: {
      type: data.type,
      title: data.title,
      text: data.text,
      endDate: data.endDate ? new Date(data.endDate) : null,
      name: data.name,
      ip: data.ip,
      modpack: data.modpack,
      version: data.version,
      options: data.options
        ? {
            create: data.options.map((o: any) => ({ text: o.text, votes: o.votes ?? 0 })),
          }
        : undefined,
    },
    include: { options: true },
  });
  return NextResponse.json(post);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const idParam = searchParams.get('id');
  const id = idParam ? parseInt(idParam, 10) : NaN;
  if (!id) {
    return NextResponse.json({ error: 'ID required' }, { status: 400 });
  }
  await prisma.post.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
