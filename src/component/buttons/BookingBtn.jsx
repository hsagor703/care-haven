"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const BookingBtn = ({ service }) => {
  const {
    _id,
    title,
    tagline,
    description,
    media,
    rating,
    pricing,
    whatsIncluded,
    caregiver,
    trustAndSafety,
    booking,
  } = service || {};
  const session = useSession();
  const path = usePathname();
  const router = useRouter();
  const handleBooking = () => {
    if (session?.status === "authenticated") {
      router.push(`${`/booking/${_id}`}`);
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };
  return (
    <div>
      {/* <Link href={`${session?.data ? `/booking/${_id}` : "/login"}`}> */}
      <button
        onClick={() => handleBooking()}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition"
      >
        {booking?.ctaText}
      </button>
      {/* </Link> */}
    </div>
  );
};

export default BookingBtn;
