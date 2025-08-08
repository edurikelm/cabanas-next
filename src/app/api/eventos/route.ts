import { eventSchema } from '@/lib/schemas/eventSchema';
import { postArriendo, getArriendos } from '@/services/arriendos';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();
    const data = eventSchema.parse(body);
    postArriendo(data);
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.errors ?? error.message },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    const eventos = await getArriendos();
    return NextResponse.json(eventos);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
