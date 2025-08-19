import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import {
  createMessage,
  getMessages,
  deleteMessage,
} from '../../../lib/contactMessages';

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    if (
      process.env.MAIL_HOST &&
      process.env.MAIL_USER &&
      process.env.MAIL_PASS
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT) || 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });
      await transporter.sendMail({
        from: process.env.MAIL_USER,
        to: 'swbr@proton.me',
        replyTo: email,
        subject: `Contact Form Message from ${name}`,
        text: message,
      });
      return NextResponse.json({ success: true });
    }
  } catch (err) {
    console.error('Failed to send email', err);
  }

  await createMessage({ name, email, message });
  return NextResponse.json({ success: true });
}

export async function GET() {
  const messages = await getMessages();
  return NextResponse.json(messages);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  await deleteMessage(Number(id));
  return NextResponse.json({ success: true });
}
