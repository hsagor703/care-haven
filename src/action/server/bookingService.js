"use server";

import { collections, dbConnect } from "@/lib/dbConnect";
import { orderInvoiceTemplate } from "@/lib/invoiceTemplate";
import { sendEmail } from "@/lib/sendEmail";

const bookingService = async (bookingData) => {
  console.log(bookingData);
  //insert booking data
  const result = await dbConnect(collections.BOOKING_SERVICE).insertOne(
    bookingData,
  );
  if (result.acknowledged) {
    // 📧 Send Invoice Email
    const durationText = `${bookingData?.value} ${bookingData?.durationType}`; // 2 month

    const totalPrice =
      bookingData?.totalMonthlyCost ||
      bookingData?.totalDailyCost ||
      bookingData?.totalHourlyCost;

    await sendEmail({
      to: bookingData.userEmail,
      subject: "Your Order Invoice - Care Haven",
      html: orderInvoiceTemplate({
        orderId: result.insertedId.toString(),
        items: {
          ServiceName: bookingData?.serviceName,
          durationText,
          servicePrice: {
            Hourly: bookingData?.servicePrice?.perHour,
            Daily: bookingData?.servicePrice?.perDay,
            Monthly: bookingData?.servicePrice?.perMonth,
          },
        },

        totalPrice,
      }),
    });

    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

export default bookingService;
