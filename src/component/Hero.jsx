import React from "react";
import Banner from '../../public/newbook.png';
const Hero = () => {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row md:mt-44">
        <div className="w-full md:w-1/2 mt-30 sm:mt-8 order-2 md:order-1">
          <div className=" space-y-12">
            <h1 className="text-4xl font-bold text-white ">
              Hello,Welcome here to learn something{" "}
              <span className="   text-orange-300">new everyday!!</span>
            </h1>
            <p className="text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              minima dicta est mollitia dolore, nemo rerum fugit repellat hic
              odio aperiam optio, tenetur quisquam, maxime provident nulla eos
              vitae consequuntur!
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className=" mt-3 btn btn-outline btn-accent">Login</button>
        </div>
        <div className="w-full md:w-1/2 order-1">
         <img src={Banner} className=" md:ml-36" alt="Book image"/>
          
    
        </div>
      </div>
    </>
  );
};

export default Hero;
