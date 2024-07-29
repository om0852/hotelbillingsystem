import { loginHandler } from "@/actions/loginAction";
import toast from "react-hot-toast";
import LoginForm from "../components/client/Form";

const Page = () => {
  const handleForm=async(formData:FormData)=>{
    toast.loading("Signing In");
    let error = await loginHandler(formData);
    if(!error){
      toast.success("Login Sucessfully Completed")
    }
  }
  return (
    <div className="w-full h-[100vh] flex">
      <div className="w-[40%] bg-white">
        <div className="w-[80%] mx-auto py-16 flex flex-col items-center">
          <h1 className="text-black text-2xl lg:font-medium font-semibold">
            Sign in to your POS System
          </h1>
          <div className="w-[70%] my-4 h-10 flex items-center justify-center">
            <button
              // onClick={() => signIn("google")}
              type="button"
              className="w-full text-white my-2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
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
                  clipRule="evenodd"
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

        <LoginForm/>
        </div>
      </div>
      <div className="w-[60%]">
        <img src="/loginbg.png" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Page;
