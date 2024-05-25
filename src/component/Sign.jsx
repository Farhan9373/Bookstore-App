import React from "react";
import { Link, json } from "react-router-dom";
import { useForm } from "react-hook-form";
import Login from "./Login";
import axios from 'axios'
import toast from "react-hot-toast";
function Sign() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/signup", userinfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
         toast.success('signup successfully');
        }
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      })
      .catch((err) => {
       if(err.response){
        console.log(err);
        toast.error("Error:"+err.response.data.message);
       }
      });
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className=" w-[500px] px-3 py-10 shadow-black rounded-md">
          <div className=" modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method=" dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
              <h3 className="font-bold text-2xl mb-8 text-orange-400">
                Signup
              </h3>
              <div className="mt-4 space-y-2">
                <span className=" text-orange-400 font-semibold">Name:</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className=" w-80 px-3 py-1 border rounded-md outline-none "
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="  text-sm text-red-700">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span className=" text-orange-400 font-semibold">Email:</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className=" w-80 px-3 py-1 border rounded-md outline-none "
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="  text-sm text-red-700">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span className=" text-orange-400 font-semibold">
                  Password:
                </span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className=" w-80 px-3 py-1 border rounded-md outline-none "
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className=" text-red-700 text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex  justify-between my-4">
                <button className="px-2 py-2 bg-orange-400 font-bold text-black rounded-lg w-20 hover:bg-orange-300">
                  Signup
                </button>
                <p className="mt-2">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                
                  </button>{" "}
                 <Login/>
                 
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sign;
