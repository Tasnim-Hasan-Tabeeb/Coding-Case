// app/manageEvent/page.tsx
import prisma from '@/lib/prisma';
import Navbar from '../partials/navbar';
import ManageEventForm from '../partials/manageEventForm';
import AddEventForm from '../partials/addEventForm';

export default async function ManageEventPage() {
  const events = await prisma.events.findMany({
    orderBy: { event_date: 'asc' },
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-4">
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Edit Events</h1>
        <ManageEventForm events={events} />
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Events</h1>
        <AddEventForm />
      </div>

    </div>
  );
}