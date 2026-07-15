import { NextResponse } from 'next/server';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

const isValidText = (value: unknown, minimumLength: number) =>
  typeof value === 'string' && value.trim().length >= minimumLength;

export async function POST(request: Request) {
  const body: ContactPayload = await request.json();

  if (
    !isValidText(body.name, 2) ||
    !isValidText(body.subject, 4) ||
    !isValidText(body.message, 20) ||
    typeof body.email !== 'string' ||
    !/^\S+@\S+\.\S+$/.test(body.email)
  ) {
    return NextResponse.json(
      { message: 'Datos de contacto inválidos.' },
      { status: 400 },
    );
  }

  // Punto de integración: aquí se conectaría Resend, SendGrid o un CRM.
  return NextResponse.json({ message: 'Mensaje recibido.' }, { status: 202 });
}
