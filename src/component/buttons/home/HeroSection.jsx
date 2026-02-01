"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-linear-to-br from-emerald-500 via-green-400 to-lime-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Care Haven <br />
            <span className="text-emerald-900">
              Trusted Care for Your Loved Ones
            </span>
          </h1>

          <p className="mt-6 text-lg text-emerald-900/90 max-w-lg">
            Find reliable caretakers for children, elderly, and special care at home.
            Safe, verified, and easy to book with Care Haven.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
            >
              Find a Caretaker
            </Link>

            <Link
              href="/become-caregiver"
              className="bg-emerald-700/90 text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-emerald-800 transition"
            >
              Become a Caregiver
            </Link>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-emerald-900 font-medium">
            <span>✔ Verified Caregivers</span>
            <span>✔ Secure Booking</span>
            <span>✔ 24/7 Support</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="bg-white/90 backdrop-blur rounded-3xl p-4 shadow-xl">
            <Image
              src="/assets/banner2.png"
              alt="Care Haven services"
              width={500}
              height={400}
              className="rounded-2xl w-full h-auto"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
