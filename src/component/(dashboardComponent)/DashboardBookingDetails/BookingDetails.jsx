"use client";

import {
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBill,
  FaCheckCircle,
} from "react-icons/fa";

const statusColor = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-blue-100 text-blue-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function BookingDetails({ bookingDetails }) {
  console.log(bookingDetails);
  if (!bookingDetails) return <p>Booking not found</p>;

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      {/* Header */}
      <div className="border p-6 rounded-2xl shadow flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-500">
            {bookingDetails.serviceName}
          </h1>
          <p className="text-gray-500">
            bookingDetails ID: {bookingDetails._id}
          </p>
        </div>

        <span
          className={`px-4 py-2 rounded-full text-sm font-medium ${statusColor[bookingDetails.bookingStatus]}`}
        >
          {bookingDetails.bookingStatus}
        </span>
      </div>

      {/* Info Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left */}
        <div className="border p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-lg font-semibold">bookingDetails Info</h2>

          <p className="flex items-center gap-2 text-gray-600">
            <FaClock /> {bookingDetails.bookingDate}
          </p>

          <p className="flex items-center gap-2 text-gray-600">
            <FaClock /> {bookingDetails.value} {bookingDetails.durationType}
          </p>

          <p className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt /> {bookingDetails.district}
          </p>

          <p className="text-gray-600">
            <strong>Address:</strong> {bookingDetails.address}
          </p>
        </div>

        {/* Right */}
        <div className="border p-6 rounded-2xl shadow space-y-4">
          <h2 className="text-lg font-semibold">Payment Summary</h2>

          <div className="flex justify-between text-gray-600">
            <span>Service Price: </span>
            <span>Hourly ৳{bookingDetails.servicePrice.perHour}</span>
            <span>Daily ৳{bookingDetails.servicePrice.perDay}</span>
            <span>Monthly ৳{bookingDetails.servicePrice.perMonth}</span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Duration: </span>
            <span>
              {bookingDetails.value} {bookingDetails.durationType}
            </span>
          </div>

          <div className="flex justify-between text-gray-600">
            <span>Calculate: </span>
            {bookingDetails.durationType === "hour" && (
              <span>
                ৳{bookingDetails.value} *{bookingDetails?.servicePrice?.perHour}
              </span>
            )}
            {bookingDetails.durationType === "day" && (
              <span>
                ৳{bookingDetails.value} *{bookingDetails?.servicePrice?.perDay}
              </span>
            )}
            {bookingDetails.durationType === "month" && (
              <span>
                ৳{bookingDetails.value} *
                {bookingDetails?.servicePrice?.perMonth}
              </span>
            )}
          </div>

          <hr />

          <div className="flex justify-between font-bold text-green-600 text-lg">
            <span>Total</span>
            <span>
              ৳
              {bookingDetails?.totalHourlyCost ||
                bookingDetails?.totalDailyCost ||
                bookingDetails?.totalMonthlyCost}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 justify-end">
        {bookingDetails.status !== "cancelled" &&
          bookingDetails.status !== "completed" && (
            <>
              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg">
                Cancel Booking
              </button>

              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg">
                Reschedule
              </button>
            </>
          )}
      </div>
    </section>
  );
}
