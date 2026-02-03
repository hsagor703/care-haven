"use client";

import Image from "next/image";
import { FaPlay, FaStar, FaHeadphones } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

const HeroBanner = () => {
  return (
    <section className="relative bg-linear-to-br from-[#050505] via-[#0b1220] to-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full text-sm mb-6">
            <MdVerified className="text-green-400" />
            Trusted by 10,000+ Happy Customers
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-4xl font-bold leading-tight">
            <span className="linear-text">
              Care Haven
            </span>
            Trusted Care for Your Loved Ones
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-300 max-w-lg">
            Premium care services with expert support, delivered to your home.
            Experience comfort, trust, and quality care—always.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4 mt-8">
            <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg font-medium transition">
              Explore Services →
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 hover:bg-white/10 transition">
              <FaPlay className="text-green-400" />
              Free Care Assessment
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12">
            <div>
              <p className="text-2xl font-bold">4.9/5</p>
              <p className="text-gray-400 text-sm">Star Rating</p>
            </div>

            <div>
              <p className="text-2xl font-bold">30-Day</p>
              <p className="text-gray-400 text-sm">Trial Period</p>
            </div>

            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p className="text-gray-400 text-sm">Care Support</p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative hidden md:flex justify-center items-center">
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-full border border-green-400/40 animate-pulse"></div>
            <div className="absolute inset-8 rounded-full border border-orange-400/40"></div>
            <div className="absolute inset-16 rounded-full border border-green-400/40"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              {/* <FaHeadphones className="text-green-400 text-4xl" /> */}
              <Image
                className=""
                alt="care haven"
                src={"/assets/logo.png"}
                width={50}
                height={80}
              />
            </div>
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-10 right-10 bg-white/10 px-4 py-2 rounded-lg backdrop-blur">
            <p className="text-sm font-medium text-green-400">Certified Care</p>
            <p className="text-xs text-gray-300">Medical Grade</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
