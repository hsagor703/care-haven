import { allServiceCenter } from "@/action/server/serviceCenter";
import { getSingleBooking, getSingleService } from "@/action/server/services";
import BookingForm from "@/component/bookingFrom/BookingForm";
import { ObjectId } from "mongodb";
import React from "react";

const BookingPage = async ({ params }) => {
  const { slug } = await params;
  const serviceDetails = await getSingleBooking(slug);

  // area point
  const serviceArea = await allServiceCenter() || [];
  const formateServiceArea = JSON.parse(JSON.stringify(serviceArea))
  const formateServiceDetails = JSON.parse(JSON.stringify(serviceDetails))
  const duplicateRegion = serviceArea.map((r) => r.region);
  // convert 64 to 8 region
  const duplicateToSingleRegion = [...new Set(duplicateRegion)];
  // all district in region
  const districtByRegion = (region) => {
    const regions = serviceArea.filter((r) => r.region == region);
    return regions;
  };

  return (
    <section className="py-24 ">
      <BookingForm
        formateServiceArea={formateServiceArea}
        formateServiceDetails={formateServiceDetails}
      ></BookingForm>
    </section>
  );
};

export default BookingPage;
