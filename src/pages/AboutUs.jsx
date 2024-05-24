import React from "react";
import about from "../../public/test.jpg";
import Footer from "./Footer";
import ab1 from "../../public/1 about.jpg";
import ab2 from "../../public/2 about.jpg";

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
            <a
              href="/"
              className="hover:text-[#FF9C00] font-urbanist font-semibold"
            >
              Home
            </a>
            /{" "}
            <span className="text-[#FF9C00] font-urbanist font-semibold text-sm">
              About Us
            </span>
          </h3>
        </div>
      </div>

      <div className="mt-72 border  bg-[#F3F6F0]  p-24">
        <div className="flex  space-x-16">
          <div className="border bg-white border-transparent shadow-lg p-24">
            <h1 className="text-[#45AB49] font-bold">Our visssion</h1>
            <p className="mt-8 font-semibold">
              To become the leading global platform that connects consumers with
              the finest organic produce, fostering a sustainable future by
              promoting the benefits of organic farming and supporting
              specialized farmers worldwide. We envision a world where healthy,
              organic food is accessible to all, where consumers are empowered
              to make informed choices about their nutrition, and where farmers
            </p>
          </div>
          <div className="border border-transparent shadow-lg bg-white p-24">
            <h1 className="text-[#45AB49] font-bold">Our Mission</h1>
            <p className="mt-8 font-semibold">
              Our mission is to unearth and deliver top-tier organic products,
              including fruits, vegetables, and more, from specialized farmers
              to our customers. We are committed to ensuring the highest quality
              and sustainability standards while empowering farmers and
              enriching the health and well-being of our consumers through
              fresh, organic produce.
            </p>
          </div>
        </div>
        <div className="my-[8rem] flex gap-[4rem]">
          <div className=" w-[40rem]">
            <p className="text-orange-400 font-bold mb-5 text-2xl">
              WHY CHOOSE US{" "}
            </p>
            <p className="text-2xl font-bold mt-2"> Organic & Healthy</p>
            <p className="text-2xl font-bold mt-2"> Foods Provider Farm</p>

            <p className="mt-8 font-bold">
              There many variations of lorem ipsum available, but the majority
              have suffered <br />
              alterration in some form, by injected humour, or randomised words
              which don't look <br /> even believable. If you are going to use a
              passage of Lorem Ipsum
            </p>
            <br />
            <div
              className="bg-white border rounded-lg"
            >
              <p className="font-bold">Agriculture & Foods</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia quas in possimus aspernatur maiores nisi, ipsa eius
                recusandae officia <br /> error dignissimos ex ut veritatis
                reiciendis corporis fugit hic ab. Debitis?
              </p>
            </div>
            <br />
            <div className="bg-white  border rounded-lg">
              <p>Vegetables & Fruits</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatum facere quisquam sunt at earum, commodi distinctio
                sint magnam tempora, molestiae consequatur <br />
                iusto deleniti rerum, in ipsum nostrum porro asperiores. Quas!
              </p>
            </div>
          </div>
          <div className="transfrom duration-45 -rotate-12 ml-[8rem]">
            <img
              src={ab1}
              alt=""
              className="w-[20rem]  rounded-full border-8 border-[#FF9C00]"
            />
            <img
              src={ab2}
              alt=""
              className="w-[20rem] h-[20rem] -mt-[8rem] ml-5 rounded-full border-8 border-white"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
