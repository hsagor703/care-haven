"use server";

import { collections, dbConnect } from "@/lib/dbConnect";

const bookingService = async (bookingData) => {
  console.log(bookingData);
  //insert booking data
  const result = await dbConnect(collections.BOOKING_SERVICE).insertOne(
    bookingData,
  );
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

export default bookingService;
