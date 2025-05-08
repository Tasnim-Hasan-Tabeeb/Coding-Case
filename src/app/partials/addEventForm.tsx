'use client';
import { useState } from 'react';

export default function AddEventForm(){
    const [form, setForm] = useState({
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

      const handleSubmit = async (e: any) => {
        e.preventDefault();
        setMessage('');
    
        if (!form.name || !form.location || !form.event_date || !form.event_time || !form.description) {
          setMessage('All fields are required.');
          return;
        }
    
        const method = 'POST';
        const endpoint = `/api/events`;
    
        const res = await fetch(endpoint, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
    
        const data = await res.json();
        if (!res.ok) {
          setMessage(data.error || 'Something went wrong.');
        } else {
          setMessage('Event added successfully!');
          setTimeout(() => setMessage(''), 3000);
        }
      };

      return (
        <form onSubmit={handleSubmit} className="space-y-4">
    
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Event Name" value={form.name} onChange={handleChange} className="border p-2 rounded"/>
            <input type="text" name="location" placeholder="Location" value={form.location} onChange={handleChange} className="border p-2 rounded"/>
            <input type="date" name="event_date"value={form.event_date}onChange={handleChange}className="border p-2 rounded"/>
            <input type="time" name="event_time" value={form.event_time} onChange={handleChange} className="border p-2 rounded"/>
          </div>
          <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded"/>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Add Event
          </button>
          {message && <p className="text-sm text-red-500 mt-2">{message}</p>}
        </form>
      );
    

}