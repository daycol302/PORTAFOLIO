import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
};

const isValidText = (value: unknown, minimumLength: number) =>
  typeof value === 'string' && value.trim().length >= minimumLength;

const resend = new Resend(process.env.RESEND_API_KEY);

const redis = Redis.fromEnv();
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '1 m'),
});

export async function POST(request: Request) {
  try {
    // Rate limiting por IP
    const ip = request.headers.get('x-forwarded-for') ?? 'anonymous';
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.json(
        { message: 'Demasiadas solicitudes, intenta más tarde.' },
        { status: 429 },
      );
    }

    const body: ContactPayload = await request.json();

    // Validaciones específicas
    if (!isValidText(body.name, 2)) {
      return NextResponse.json(
        { message: 'El nombre debe tener al menos 2 caracteres.' },
        { status: 400 },
      );
    }

    if (typeof body.email !== 'string' || !/^\S+@\S+\.\S+$/.test(body.email)) {
      return NextResponse.json(
        { message: 'El correo electrónico no es válido.' },
        { status: 400 },
      );
    }

    if (!isValidText(body.subject, 4)) {
      return NextResponse.json(
        { message: 'El asunto debe tener al menos 4 caracteres.' },
        { status: 400 },
      );
    }

    if (!isValidText(body.message, 20)) {
      return NextResponse.json(
        { message: 'El mensaje debe tener al menos 20 caracteres.' },
        { status: 400 },
      );
    }

    // Enviar correo con Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // válido para pruebas
      to: 'daynovergarcia@gmail.com', // tu correo
      subject: `Nuevo mensaje: ${body.subject}`,
      text: `Nombre: ${body.name}\nCorreo: ${body.email}\n\n${body.message}`,
    });

    if (error) {
      console.error('Error al enviar correo:', error);
      return NextResponse.json(
        { message: `Error al enviar correo: ${error.message}` },
        { status: error.statusCode ?? 500 },
      );
    }

    return NextResponse.json(
      { message: 'Mensaje enviado correctamente.', id: data?.id },
      { status: 202 },
    );
  } catch (error) {
    console.error('Error en /api/contact:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
