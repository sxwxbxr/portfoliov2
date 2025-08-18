import { NextResponse } from 'next/server';
import { registerUser } from '../../../lib/users';

export async function POST(request: Request) {
  const { email, password } = await request.json();
  try {
    registerUser(email, password);
    return NextResponse.json({ message: 'User registered' }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
