// "use server"
import { getAllBooking } from "@/action/server/services";
import MyBookings from "@/component/(dashboardComponent)/DashboardBooking/MyBookings";
import React from "react";
const MyBooking = async () => {
  const bookings = await getAllBooking();
  console.log(bookings);
  return (
    <div>
      <MyBookings
        bookings={JSON.parse(JSON.stringify(bookings))}
      ></MyBookings>
    </div>
  );
};

export default MyBooking;
