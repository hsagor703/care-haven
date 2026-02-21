"use client";

import { usePathname, useRouter } from "next/navigation";

const BookingBtn = ({service}) => {
  const {
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
  } = service;

  const path = usePathname();
  const router = useRouter();
  const isUser = false;
  const handleBooking = () => {
    if (isUser) {
        alert(title)
    }else{
        router.push(`/login?callbackUrl=${path}`)
    }
  };
  return (
    <div>
      <button
        onClick={handleBooking}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition"
      >
        {booking?.ctaText}
      </button>
    </div>
  );
};

export default BookingBtn;
