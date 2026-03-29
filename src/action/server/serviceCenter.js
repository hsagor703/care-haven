import { collections, dbConnect } from "@/lib/dbConnect";

export const allServiceCenter = async () => {
  const allCenter = await dbConnect(collections.SERVICE_CENTER).find().toArray();
  return allCenter
};
