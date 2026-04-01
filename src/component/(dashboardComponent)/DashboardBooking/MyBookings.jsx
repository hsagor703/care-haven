"use client";

import Link from "next/link";

const statusColor = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-blue-100 text-blue-700",
  cancelled: "bg-red-100 text-red-700"
};

export default function MyBookings({ bookings }) {
  console.log(bookings);
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          No bookings found.
        </div>
      ) : (
        <div className="grid gap-6">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="border p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                
                {/* Left Info */}
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-gray-400">
                    {booking.serviceName}
                  </h2>

                  <p className="text-sm text-gray-500">
                    📅 {booking.bookingDate}
                  </p>

                  <p className="text-sm text-gray-500">
                    ⏱ {booking.value} {booking.durationType}
                  </p>

                  <p className="text-sm text-gray-500">
                    📍 {booking.address}
                  </p>
                </div>

                {/* Right Info */}
                <div className="flex flex-col items-start md:items-end gap-3">
                  
                  {/* Status */}
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[booking.bookingStatus]}`}
                  >
                    {booking.bookingStatus}
                  </span>

                  {/* Price */}
                  <p className="text-lg font-bold text-green-600">
                    ৳{booking.totalDailyCost || booking.totalHourlyCost || booking.totalMonthlyCost}
                  </p>

                  {/* Action */}
                  <Link href={`/dashboard/my-booking/${booking._id}`}>
                    <button className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}