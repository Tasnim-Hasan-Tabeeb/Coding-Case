// src/app/api/events/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, location, event_date, event_time } = body;

    const errors = [];
    if (!name?.trim()) errors.push('Name is required');
    if (!location?.trim()) errors.push('Location is required');
    if (!event_date) errors.push('Event date is required');
    if (!event_time) errors.push('Event time is required');

    if (errors.length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    const event = await prisma.events.create({
      data: {
        name,
        description: description || '',
        location,
        event_date: new Date(event_date),
        event_time: new Date(`1970-01-01T${event_time}:00Z`),
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}
