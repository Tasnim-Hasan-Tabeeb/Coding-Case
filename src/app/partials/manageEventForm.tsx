'use client';

import { useState } from 'react';

export default function ManageEventForm({ events }: { events: any[] }) {
  const [form, setForm] = useState({
    id: '',
    name: '',
    location: '',
    event_date: '',
    event_time: '',
    description: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSelect = (id: string) => {
    const selected = events.find((e) => e.id === parseInt(id));
    if (selected) {
      const formattedDate = new Date(selected.event_date).toISOString().split('T')[0];
      const formattedTime = new Date(selected.event_time).toISOString().substr(11, 5);
  
      setForm({
        id: selected.id,
        name: selected.name,
        location: selected.location || '',
        event_date: formattedDate,
        event_time: formattedTime,
        description: selected.description || '',
      });
    }
  };
  

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setMessage('');

    if (!form.name || !form.location || !form.event_date || !form.event_time || !form.description) {
      setMessage('All fields are required.');
      return;
    }

    const method = 'PUT';
    const endpoint = `/api/events/${form.id}`;

    const res = await fetch(endpoint, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.error || 'Something went wrong.');
    } else {
      setMessage('Event updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    }

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium">Select Event to Edit:</label>
        <select
          className="w-full border p-2 rounded"
          onChange={(e) => handleSelect(e.target.value)}
          defaultValue=""
        >
          <option value="">-- Select Event --</option>
          {events.map((event) => (
            <option key={event.id} value={event.id}>
              {event.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" name="name" placeholder="Event Name" value={form.name} onChange={handleChange} className="border p-2 rounded"/>
        <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} className="border p-2 rounded"/>
        <input type="date" name="event_date"value={form.event_date}onChange={handleChange}className="border p-2 rounded"/>
        <input type="time" name="event_time" value={form.event_time} onChange={handleChange} className="border p-2 rounded"/>
      </div>

      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded"/>

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Update Event
      </button>

      {message && <p className="text-sm text-red-500 mt-2">{message}</p>}
    </form>
  );
}