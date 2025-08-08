import { eventSchema } from '@/lib/schemas/eventSchema';
import { postArriendo, getArriendos } from '@/services/arriendos';
import { NextRequest, NextResponse } from 'next/server';
import { ZodError } from 'zod';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = eventSchema.parse(body);
    postArriendo(data);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 400 });
  }
}

export async function GET() {
  try {
    const eventos = await getArriendos();
    return NextResponse.json(eventos);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 });
  }
}
