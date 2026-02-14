"use client";

import Button from "@/component/buttons/Button";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="card w-full max-w-2xl bg-color shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-emerald-700">
            Register
          </h2>

          <form className="space-y-4 mt-4">
            {/* GRID START */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* NID */}
              <div>
                <label className="label">
                  <span className="label-text">NID No</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter NID"
                  className="input input-bordered w-full focus:input-success"
                  required
                />
              </div>

              {/* Name */}
              <div>
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full focus:input-success"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="input input-bordered w-full focus:input-success"
                  required
                />
              </div>

              {/* Contact */}
              <div>
                <label className="label">
                  <span className="label-text">Contact</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="input input-bordered w-full focus:input-success"
                  required
                />
              </div>
            </div>

            {/* PASSWORD FULL WIDTH */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full focus:input-success"
                required
              />
            </div>

            {/* BUTTON */}
            <Button>{"Register"}</Button>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-700 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
