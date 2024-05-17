import React from "react";
import { Link } from "react-router-dom";
import {useForm} from 'react-hook-form';
const Login= () =>{
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog" >
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                onClick={() => document.getElementById("my_modal_3").close()}
              >
                ✕
              </Link>
      
            <h3 className="font-bold text-2xl mb-8 text-orange-400">Login</h3>
            <div className="mt-4 space-y-2">
              <span className=" text-orange-400 font-semibold">Email:</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-80 px-3 py-1 border rounded-md outline-none "
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && (<span className="  text-sm text-red-700">This field is required</span>)}
            </div>
            <div className="mt-4 space-y-2">
              <span className=" text-orange-400 font-semibold">Password:</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className=" w-80 px-3 py-1 border rounded-md outline-none "
                {...register("password", { required: true })}
              />
              <br/>
               {errors.password &&(<span className=" text-red-700 text-sm">This field is required</span>)}
            </div>
            <div className="flex  justify-between my-4">
              <button className="px-2 py-2 bg-orange-400 font-bold text-black rounded-lg w-20 hover:bg-orange-300">
                Login
              </button>
              <p className="mt-2">
                Not Registered?{" "}
                <Link
                  to={"/sign"}
                  className="text-orange-500 underline cursor-pointer font-semibold "
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
