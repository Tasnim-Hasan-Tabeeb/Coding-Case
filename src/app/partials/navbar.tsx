'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600 text-white px-6 py-3 shadow-md z-50">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <div className="text-xl font-bold">Event Manager</div>
        <div className="flex space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/manageEvent" className="hover:underline">Manage Event</Link>
        </div>
      </div>
    </nav>
  );
}
