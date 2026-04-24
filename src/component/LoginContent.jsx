"use client";
import Swal from "sweetalert2";
import Button from "@/component/buttons/Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import GoogleLogin from "@/component/buttons/GoogleLogin";
const LoginContent = () => {
  const router = useRouter();
  const params = useSearchParams();
  console.log(params);
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const loginData = {
      email,
      password,
    };
    console.log({ email, password });
    const res = await signIn("credentials", {
      email,
      password,
      // redirect: false,
      callbackUrl: params.get("callbackUrl") || "/",
    });

    console.log(params.get("callbackUrl") || "/");
    console.log("res from login", res);
    if (!res.ok) {
      Swal.fire("Error", "Email and Password is wrong", "error");
    } else {
      Swal.fire("Success", "login successful", "success");
    }
  };
  return (
      <div className="min-h-screen flex items-center justify-center  px-4">
        <div className="card w-full max-w-md bg-color shadow-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold text-center text-emerald-700">
              Login
            </h2>

            <form onSubmit={handleLogin} className="space-y-4 mt-4">
              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text text-gray-400">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered border border-gray-600 text-gray-400 bg-[#1D232A] w-full focus:input-success"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="label">
                  <span className="label-text text-gray-400">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="input text-gray-400 border border-gray-600 bg-[#1D232A] input-bordered w-full focus:input-success"
                  required
                />
              </div>

              {/* Button */}
              <Button>{"Login"}</Button>
            </form>
            {/* google btn */}
            <GoogleLogin />
            <p className="text-center mt-4 text-white">
              Don't have an account?
              <Link
                href={`/register?callbackUrl=${params.get("callbackUrl") || "/"}`}
                className="text-emerald-700 font-semibold"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};

export default LoginContent;
