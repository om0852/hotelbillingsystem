import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-[100vh] flex">
      <div className="w-[40%] bg-white">
        <div className="w-[80%] mx-auto py-16 flex flex-col items-center">
          <h1 className="text-black text-2xl lg:font-medium font-semibold">
            Sign in to your POS System
          </h1>
          <div className="w-[70%] my-4 h-10 flex items-center justify-center">
            <button
              type="button"
              className="w-full  text-white my-2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            >
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 19"
              >
                <path
                  fillRule="evenodd"
                  d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                  clip-rule="evenodd"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
          <div className="w-[74%] h-10 flex flex-row items-center">
            <div className="w-[15vh] h-[2px] bg-gray-800"></div>
            <p className="mx-2 text-sm w-auto">Or Continue with</p>
            <div className="w-[15vh] h-[2px] bg-gray-800"></div>
          </div>

          <form className="w-[70%] h-[40vh]">
            <div className="w-full my-4">
              <label>Email</label>
              <input
                type="text"
                className="w-full h-10 px-2 border-gray-300 border-2 rounded-sm"
              />
            </div>
            <div className="w-full my-4">
              <label>Password</label>
              <input
                type="password"
                className="w-full h-10 px-2  border-gray-300 border-2 rounded-sm"
              />
            </div>

            <div className="w-full my-4 flex flex-row justify-end">
              <Link
                href={"/forgetpassword"}
                className="text-purple-700 font-semibold"
              >
                Forgot Your Password?
              </Link>
            </div>

            <div className="w-full my-4 ">
              <button type="submit" className="w-full h-[7vh] rounded-sm bg-purple-600 text-white">Sign In</button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-[60%]">
        <img src="/loginbg.png" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Page;
