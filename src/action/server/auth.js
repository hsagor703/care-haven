"use server";
import bcrypt from "bcryptjs";
import { collections, dbConnect } from "@/lib/dbConnect";

const registerUser = async (payload) => {
  console.log(payload);
  const { nidNo, name, email, password, contact } = payload;
  //check payload
  if (!email || !password) return null;
  //check user
  const isExist = await dbConnect(collections.USERS).findOne({ email });
  if (isExist) return null;
  //create user
  const newUser = {
    nidNo,
    name,
    email,
    password: await bcrypt.hash(password, 14),
    contact,
    role: "user",
    provider: "credentials",
  };
  //insert user
  const result = await dbConnect(collections.USERS).insertOne(newUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};
export default registerUser;

export const loginUser = async (payload) => {
  console.log(payload);
  const { email, password } = payload;
  if (!email || !password) return null;
  const user = await dbConnect(collections.USERS).findOne({ email });
  if (!user) return null;
  const isMatch = await bcrypt.compare(password, user.password)
  if (isMatch) {
    return user
  }else {
    return null
  }
};
