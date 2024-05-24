import React from "react";
import f1 from "../../public/f1.png";
import f2 from "../../public/f2.png";

const Footer = () => {
  return (
    <div className="border border-transparent shadow-lg bg-black text-white">
      <div className="">
        <p className="text-4xl ml-24 mt-4 ">
          <span className="text-[#45AB49]">AGRI</span>sales
        </p>
        <div className="flex justify-around mt-4">
          <div>
            <h1 className="font-semibold text-lg">Reach out</h1>
            <div className="space-y-4">
              <p className="mt-3">
                {" "}
                <span className="font-semibold hover:text-[#FF9C00]">
                  Address:
                </span>
                 Kacyiru-Kigali-Rwanda
              </p>
              <p>
                {" "}
                <span className="font-semibold hover:text-[#FF9C00]">
                  Email:{" "}
                </span>
                agrisales@gmail.com
              </p>
              <p>
                {" "}
                <span className="font-semibold hover:text-[#FF9C00]">
                  Call Us:{" "}
                </span>{" "}
                +250783059629
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="font-semibold text-lg">Quick Links</h1>
            <div className="flex flex-col mt-4 space-y-4 ">
              <a href="" className="hover:text-[#FF9C00]">
                Home
              </a>
              <a href="" className="hover:text-[#FF9C00]">
                About Us
              </a>
              <a href="" className="hover:text-[#FF9C00]">
                Best Products
              </a>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-lg">Recent Post</h1>
            <div className="mt-4 space-y-4">
              <div className="flex">
                <img src={f1} className="w-[20%] h-[10%] transform transition duration-500 hover:scale-110" />
                <p className="p-3"> This is the recent product so far</p>
              </div>
              <div className="flex">
                <img
                  src={f2}
                  className="w-[20%] h-[10%] transform transition duration-500 hover:scale-110"
                />
                <p className="p-3"> This is the recent product so far</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-8 border-gray-100 pt-8 flex justify-center bg-[#d4a04d] space-x-8 ">
          <div className="sm:flex sm:justify-around">
            <p className="text-xs font-semibold text-black">
              &copy; 2022. Company Name. All rights reserved.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-black font-semibold transition hover:opacity-75"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-black font-semibold transition hover:opacity-75"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-black font-semibold transition hover:opacity-75"
                >
                  {" "}
                  Cookies{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
