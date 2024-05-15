import React from "react";
import "./Profile.css";
import image6 from "../../public/image6.jpeg";
// import image8 from "../../public/image8.jpeg";
// import image7 from "../../public/image7.jpeg";
// import image9 from "../../public/image9.jpeg";
// import image10 from "../../public/image10.jpeg";
// import image11 from "../../public/image11.jpeg";
// import image12 from "../../public/image12.jpeg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="whole">
        <div className="upc">
          <div className="gradiant"></div>
          <div className="profile-down">
            <img src={image6} />
            <div className="profile-title">Christy Sarah</div>
            <div className="profile-description">
              I am a Farmer hvbfvrbhvbhjbvejbiurbj bjbiurb
              fhbkjbvehvriuhyehvdbjhd ;akvwihviujb nhh dk;jbiubb ;kjb
            </div>
            <div className="profile-button">
              <a href="">Make a Post</a>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="bg-white text-black w-full mt-64">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mt-36 w-full">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            <a
              className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
              href="/Details"
            >
              <img src={image12} className="w-[20vw]" />
              <p className="mt-1 text-sm text-gray-300 w-[19vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
              href="/Details"
            >
              <img src={image11} className="w-[18.7vw]" />

              <p className="mt-1 text-sm text-gray-300 w-[19vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className=" w-[20vw] rounded-md inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
              href="#"
            >
              <img src={image10} className="w-[20vw]" />

              <p className="mt-1 text-sm text-gray-300 w-[19vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
              href="#"
            >
              <img src={image9} className="w-[20vw]" />

              <p className="mt-1 text-sm text-gray-300 w-[19vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
              href="#"
            >
              <img src={image7} className="w-[18.7vw]" />

              <p className="mt-1 text-sm text-gray-300 w-[19vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>

            <a
              className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom "
              href="#"
            >
              <img src={image8} className="w-[20vw]" />

              <p className="mt-1 text-sm text-gray-300 w-[19vw]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut
                quo possimus adipisci distinctio alias voluptatum blanditiis
                laudantium.
              </p>
            </a>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Profile;
