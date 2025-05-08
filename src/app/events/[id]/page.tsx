import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import Navbar from '../../partials/navbar';
import Link from 'next/link';

type id = {
  params: {
    id: string;
  };
};

export default async function EventDetailPage({ params }: id) {
  const eventId = parseInt(params.id);
  if (isNaN(eventId)) return notFound();

  const event = await prisma.events.findUnique({
    where: { id: eventId },
  });

  if (!event) return notFound();

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <Link href="/" className="text-blue-600 hover:underline inline-block mb-6">
            ← Back to events
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.name}</h1>

          <div className="space-y-2 text-lg text-gray-700 mb-6">
            <p><span className="font-semibold">📍 Location:</span> {event.location}</p>
            <p><span className="font-semibold">📅 Date:</span> {new Date(event.event_date).toLocaleDateString()}</p>
            <p><span className="font-semibold">⏰ Time:</span> {new Date(event.event_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
          </div>

          {event.description && (
            <div className="border-t pt-6 text-gray-800 leading-relaxed text-justify">
              {event.description}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
