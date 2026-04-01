import { getSingleBookingDetails } from "@/action/server/services";
import BookingDetails from "@/component/(dashboardComponent)/DashboardBookingDetails/BookingDetails";
import React from "react";

const BookingDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const bookingDetails = await getSingleBookingDetails(slug);
//   if (bookingDetails.length === undefined) {
//     return (
//       <div className="text-center py-20 text-gray-500">No booking Details Here.</div>
//     );
//   }
  return (
    <div>
      {bookingDetails.length === 0 ? (
        <span>No Details Available</span>
      ) : (
        <BookingDetails
          bookingDetails={{
            ...bookingDetails,
            _id: bookingDetails?._id.toString(),
          }}
        />
      )}
    </div>
  );
};

export default BookingDetailsPage;
