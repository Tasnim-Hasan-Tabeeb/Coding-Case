import prisma from '@/lib/prisma';
import Navbar from './partials/navbar';
import Link from 'next/link';

export default async function Home({
  searchParams,
}: {
  searchParams: { search?: string; sort?: string };
}) {
  const search = searchParams.search?.toLowerCase() || '';
  const sort = searchParams.sort === 'name' ? 'name' : 'event_date'; // default to date

  const events = await prisma.events.findMany({
    where: search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' } },
            { location: { contains: search, mode: 'insensitive' } },
          ],
        }
      : undefined,
    orderBy: { [sort]: 'asc' },
  });

  return (
    <div className="pt-20 px-4">
      <Navbar />
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>

      {/* 🔍 Search and Sort form */}
      <form method="GET" className="max-w-2xl mx-auto mb-8 flex gap-2">
        <input
          type="text"
          name="search"
          placeholder="Search by name or location..."
          defaultValue={searchParams.search || ''}
          className="flex-grow p-2 border rounded"
        />
        <select
          name="sort"
          defaultValue={searchParams.sort || 'event_date'}
          className="p-2 border rounded"
        >
          <option value="event_date">Sort by Date</option>
          <option value="name">Sort by Name</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {events.length === 0 ? (
        <p className="text-center text-gray-600">No events found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {events.map(event => (
            <div
              key={event.id}
              className="bg-white border rounded-lg shadow p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold">{event.name}</h2>
                <p className="text-gray-600 mb-1">{event.location}</p>
                <p className="text-sm text-gray-500">
                  {new Date(event.event_date).toLocaleDateString()}<br />
                  {new Date(event.event_time).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
              <Link
                href={`/events/${event.id}`}
                className="mt-4 inline-block text-blue-600 hover:underline font-medium"
              >
                See More →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
