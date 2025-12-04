import Image from 'next/image';
import Link from 'next/link';

export default function NotificationsPage() {
  return (
    <main className="p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Notifications</h1>
        <Link href="/appointments">
          <button className="px-4 py-2 bg-teal-600 text-white rounded-lg">
            Go to Appointments
          </button>
        </Link>
      </header>

      <section>
        <p className="text-gray-500">Tabs: All • Scheduled • Rescheduled • Cancelled</p>

        <div className="mt-4">
          <Image
            src="/images/notifications.jpg"
            alt="Notifications Screen"
            width={1200}
            height={700}
            className="rounded-xl shadow"
          />
        </div>
      </section>
    </main>
  );
}
