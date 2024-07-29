"use client";

import { loginHandler } from "@/actions/loginAction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginForm = () => {
  const router = useRouter();
  return (
    <form
      action={async (formData) => {
        const toastId = toast.loading("Loging in");
        const error = await loginHandler(formData);
        console.log(error);
        if (error == "NEXT_REDIRECT") {
          toast.success("Login Sucessfuly", {
            id: toastId,
          });
          router.push("/");
        } else {
          toast.error(error, {
            id: toastId,
          });
        }
      }}
      className="w-[70%] h-[40vh]"
    >
      <div className="w-full my-4">
        <label>Email</label>
        <input
          type="text"
          required
          name="email"
          className="w-full h-10 px-2 border-gray-300 border-2 rounded-sm"
        />
      </div>
      <div className="w-full my-4">
        <label>Password</label>
        <input
          name="password"
          required
          type="password"
          className="w-full h-10 px-2 border-gray-300 border-2 rounded-sm"
        />
      </div>

      <div className="w-full my-4 flex flex-row justify-end">
        <Link href="/forgetpassword" className="text-purple-700 font-semibold">
          Forgot Your Password?
        </Link>
      </div>

      <div className="w-full my-4">
        <button
          type="submit"
          className="w-full h-[7vh] rounded-sm bg-purple-600 text-white"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
