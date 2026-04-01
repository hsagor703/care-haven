import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const getAllServices = async () => {
  const services = await dbConnect(collections.SERVICES).find().toArray();
  return services;
};

export const getSingleService = async (id) => {
  if (id.length !== 24) {
    return {};
  }
  // const query = { _id: new ObjectId(id) };
  const query = { slug: id };
  const service = await dbConnect(collections.SERVICE_DETAILS).findOne(query);
  return service || {};
};

export const getSingleBooking = async (id) => {
  if (id.length !== 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };
  // const query = { slug: id };
  const service = await dbConnect(collections.SERVICE_DETAILS).findOne(query);
  return service || {};
};

//get booking items 
// get all booking 
export const getAllBooking = async () => {
  const allBooking = await dbConnect(collections.BOOKING_SERVICE).find().toArray()
  return allBooking
}

// get single booking details 
export const getSingleBookingDetails = async (id) => {
  if (id.length !== 24) {
    return {};
  }
  const query = { _id: new ObjectId(id) };
  // const query = { slug: id };
  const service = await dbConnect(collections.BOOKING_SERVICE).findOne(query);
  return service || {};
};


