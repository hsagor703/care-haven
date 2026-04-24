"use client";

import registerUser from "@/action/server/auth";
import Button from "@/component/buttons/Button";
import GoogleLogin from "@/component/buttons/GoogleLogin";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

const RegisterContent = () => {
  const router = useRouter();
  const params = useSearchParams();
  const callBackUrl = params.get("callbackUrl") || "/";
  const handleRegister = async (e) => {
    e.preventDefault();
    const nidNo = e.target.nid.value;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const contact = e.target.contact.value;
    const password = e.target.password.value;
    const registerData = { nidNo, name, email, contact, password };
    const result = await registerUser(registerData);
    if (result.acknowledged) {
      // router.push("/login");
      const result = await signIn("credentials", {
        email,
        password,
        callbackUrl: callBackUrl,
      });
      alert("registration successful ");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="card w-full max-w-2xl bg-color shadow-2xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-emerald-700">
            Register
          </h2>

          <form onSubmit={handleRegister} className="space-y-4 mt-4">
            {/* GRID START */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* NID */}
              <div>
                <label className="label">
                  <span className="label-text">NID No</span>
                </label>
                <input
                  type="number"
                  name="nid"
                  placeholder="Enter NID"
                  className="input bg-[#1D232A] input-bordered w-full focus:input-success"
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
                  name="name"
                  placeholder="Enter your name"
                  className="input bg-[#1D232A] input-bordered w-full focus:input-success"
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
                  name="email"
                  placeholder="Enter email"
                  className="input bg-[#1D232A] input-bordered w-full focus:input-success"
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
                  name="contact"
                  className="input bg-[#1D232A] input-bordered w-full focus:input-success"
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
                name="password"
                placeholder="Enter password"
                className="input bg-[#1D232A] input-bordered w-full focus:input-success"
                required
              />
            </div>

            {/* BUTTON */}
            <Button>{"Register"}</Button>
          </form>
          <GoogleLogin />
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

export default RegisterContent;
