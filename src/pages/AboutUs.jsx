import React from "react";
import about from "../../public/about3.jpg";

const AboutUs = () => {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url(${about})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            top: 0,
            left: 0,
            filter: "blur(2px)",
            // opacity: "0.8",
            height: "60%",
            width: "100%",
            zIndex: "-1",
            position: "absolute",
          }}
          className=" border border-blue-950 pb-56"
        ></div>
        <div className="mt-20">
          <h1 className="flex justify-center  text-white font-extrabold text-lg">
            About Us
          </h1>
          <h3 className="flex justify-center">
            <a href="/Front" className="hover:text-[#FF9C00]">
              Home
            </a>
            / <span className="text-[#FF9C00]">About Us</span>
          </h3>
        </div>
      </div>

      <div className="mt-72 border bg-[#F3F6F0] flex space-x-16 p-24">
        <div className="border bg-white border-transparent shadow-lg p-24">
          <h1 className="text-[#45AB49] font-bold">Our visssion</h1>
          <p className="mt-8 font-semibold">
            There many variations of lorem ipsum available, but the majority
            have suffered alterration in some form, by injected humour, or
            randomised words which don't look even believable. If you are going
            to use a passage of Lorem Ipsum
          </p>
        </div>
        <div className="border border-transparent shadow-lg bg-white p-24">
          <h1 className="text-[#45AB49] font-bold">Our Mission</h1>
          <p className="mt-8 font-semibold">
            There many variations of lorem ipsum available, but the majority
            have suffered alterration in some form, by injected humour, or
            randomised words which don't look even believable. If you are going
            to use a passage of Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
