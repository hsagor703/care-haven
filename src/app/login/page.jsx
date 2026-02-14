"use client";

import Button from "@/component/buttons/Button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      
      <div className="card w-full max-w-md bg-color shadow-2xl">
        <div className="card-body">

          <h2 className="text-3xl font-bold text-center text-emerald-700">
            Login
          </h2>

          <form className="space-y-4 mt-4">

            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full focus:input-success"
                required
              />
            </div>

            {/* Password */}
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

            {/* Button */}
            <Button>{"Login"}</Button>
          </form>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-emerald-700 font-semibold">
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
