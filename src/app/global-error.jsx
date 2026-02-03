"use client";

import Link from "next/link";
import { FaExclamationCircle, FaHome, FaRedo } from "react-icons/fa";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <section className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
          <div className="max-w-md text-center bg-white p-8 rounded-2xl shadow-lg">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <FaExclamationCircle className="text-green-600 text-6xl" />
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Something went wrong
            </h1>

            {/* Message */}
            <p className="text-gray-600 mb-6">
              We’re sorry! An unexpected error occurred. Please try again or
              return to the home page.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => reset()}
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition"
              >
                <FaRedo />
                Try Again
              </button>

              <Link href="/">
                <button className="inline-flex items-center justify-center gap-2 border border-green-600 text-green-600 hover:bg-green-50 px-5 py-3 rounded-xl font-semibold transition">
                  <FaHome />
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
