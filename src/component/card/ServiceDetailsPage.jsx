import { FaStar, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const ServiceDetails = ({ service }) => {
  if (!service) return null;

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

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Banner */}
      <div className="bg-green-50/5 rounded-2xl p-6 md:flex gap-6">
        <Image
          src={media?.thumbnail}
          alt={title}
          height={400}
          width={400}
          className="w-full md:w-1/3 rounded-xl object-cover"
        />

        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-bold linear-text">
            {title}
          </h1>
          <p className="text-gray-600">{tagline}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 text-yellow-500">
            <FaStar />
            <span className="font-semibold text-gray-700">
              {rating?.average}
            </span>
            <span className="text-sm text-gray-500">
              ({rating?.totalReviews} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">
          Service Overview
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Pricing */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">
          Pricing
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {pricing.packages.map((pkg, index) => (
            <div
              key={index}
              className="border border-green-500/25 rounded-xl p-4 text-center hover:border-green-500 transition"
            >
              <p className="font-medium text-gray-700">
                {pkg?.type}
              </p>
              <p className="text-2xl font-bold text-green-600">
                ৳{pkg?.price}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What's Included */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">
          What’s Included
        </h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {whatsIncluded.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-gray-600"
            >
              <FaCheckCircle className="text-green-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Caregiver Info */}
      <div className="mt-8 bg-gray-50/5 rounded-xl p-5">
        <h2 className="text-xl font-semibold mb-3">
          Caregiver Information
        </h2>
        <ul className="space-y-2 text-gray-600">
          <li>Type: {caregiver?.type}</li>
          <li>Experience: {caregiver?.experience}</li>
          <li>Trained: {caregiver?.trained ? "Yes" : "No"}</li>
          <li>Verified: {caregiver?.verified ? "Yes" : "No"}</li>
        </ul>
      </div>

      {/* Trust Badges */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-3">
          Trust & Safety
        </h2>
        <div className="flex flex-wrap gap-3">
          {trustAndSafety.badges.map((badge, index) => (
            <span
              key={index}
              className="bg-green-100/5 text-green-500 px-3 py-1 rounded-full text-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <Link href={booking?.redirect?.notLoggedIn}>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl text-lg font-semibold transition">
            {booking?.ctaText}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServiceDetails;
