"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AppointmentsPage() {
  const [filter, setFilter] = useState<"All" | "In-clinic" | "Tele">("All");

  return (
    <main className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">My Today's Appointments</h1>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as any)}
          className="px-4 py-2 border rounded-lg"
        >
          <option>All</option>
          <option>In-clinic</option>
          <option>Tele</option>
        </select>
      </header>

      <section>
        <p className="text-gray-500">Active Filter: {filter}</p>

        <div className="mt-4">
          <Image
            src="/images/appointments.jpg"
            alt="Appointments Screen"
            width={1200}
            height={700}
            className="rounded-xl shadow"
          />
        </div>

        <div className="mt-6">
          <Link href="/notifications">
            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg">
              Back to Notifications
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}