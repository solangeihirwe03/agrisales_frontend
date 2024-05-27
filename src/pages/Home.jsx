import { Link, NavLink } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import "./Farmerr.css";
import arrival1 from "../../public/arrival1.png";
import arrival2 from "../../public/arrival2.png";
import arrival3 from "../../public/arrival3.png";
import arrival4 from "../../public/arrival4.png";
import ReactStars from "react-rating-stars-component";
import Footer from "./Footer"
import profile1 from "../../public/profile1.jpg"
import profile2 from "../../public/profile2.jpg"
import profile3 from "../../public/profile3.jpg"

const Home = () => {
  const rating = 5;
  return (
    <div>
      <div className="bg-myBackground bg-cover w-full h-[90vh] flex flex-col justify-center pl-20 gap-8 bottom-0 left-0 right-0 transition duration-300 ease-in-out transform mb-16">
        <h2 className="text-3xl font-semibold text-[#FF9C00]">
          Welcome to AGRIsales
        </h2>
        <h4 className="text-7xl text-white font-urbanist font-bold">
          Grow, Connect, and <br />
          Thrive Together
        </h4>
        <Link
          to="/Login"
          className="text-white bg-[#FF9C00] px-4 py-3 w-[20%] md:w-[15%] text-center text-lg font-semibold rounded-lg hover:bg-[#45AB49]"
        >
          Shop here
        </Link>
      </div>
      <div className="bg-[#f3f6f0] h-[90vh] relative flex flex-col md:flex-row justify-around gap-24 w-full px-24 py-8">
        <div className="md:w-[60vh] flex flex-col gap-12">
          <div>
            <img
              src="fresh.jpg"
              alt="fresh fruit"
              className="w-full h-[35vh]"
            />
          </div>
          <div>
            <img
              src="agrisal.jpg"
              alt="tea"
              className="w-full rounded h-[33vh]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[30rem] text-lg">
          <h2 className="text-[#FF9C00]">ABOUT COMPANY</h2>
          <p className="font-urbanist font-semibold text-4xl">
            Organic & Healthy Foods Provider Farming
          </p>
          <Boxwrapper>
            <h2 className="font-semibold pb-2">Agriculture</h2>
            <p>
              Experience the unique flavors and traditions of our region. We
              cultivate locally-sourced that reflects the rich heritage of our
              land.
            </p>
          </Boxwrapper>
          <Boxwrapper>
            <h2 className="font-semibold pb-2">Vegetables & Fruits</h2>
            <p>
              Nature's Bounty, Delivered Fresh. Savor the vibrant colors and
              exceptional flavors of our seasonal fruits and vegetables.
            </p>
          </Boxwrapper>
          <Link
            to="/Login"
            className="text-white hover:bg-[#FF9C00] px-4 py-3 w-[30%]  text-center ml-12 text-lg font-semibold rounded-lg bg-[#45AB49]"
          >
            Read More
          </Link>
        </div>
      </div>

      <div className="bg-[#F3F6F0] pt-6">
        <div className="flex justify-center text-[#FF9C00] font-urbanist font-semibold text-lg">
          Organic Products
        </div>
        <div className="flex justify-center font-urbanist font-semibold  text-4xl pt-4">
          New Arrival Goods
        </div>{" "}
        <div className="">
          <div className=" flex gap-10 justify-around pt-24">
            <div
              style={{
                "clip-path": "inset(0% 0% 15% 10% round 0% 15% 0 15%)",
              }}
              className="border w-[40%] h-[60%] bg-white border-transparent shadow-lg p-8 flex justify-around gap-4"
            >
              <div>
                <img
                  src={arrival1}
                  alt="fresh fruit"
                  className="w-[40vw] h-[40vh] transform transition duration-500 hover:scale-110"
                />
              </div>
              <div className="pt-12 ml-16 ">
                <h3 className="font-urbanist font-bold text-lg hover:text-[#FF9C00]">
                  Vegan Fresh Tomato
                </h3>
                <p className="p-4 text-[#45AB49] font-bold">$87.00 (per Kg)</p>
                <p className="font-semibold">
                  Sumptuous, filling, and temptingly healthy, our Biona Organi
                </p>
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  activeColor="#FF890B"
                  edit={false}
                />
              </div>
            </div>
            <div
              style={{
                "clip-path": "inset(0% 0% 15% 10% round 0% 15% 0 15%)",
              }}
              className="border w-[40%] h-[60%] bg-white border-transparent shadow-lg p-8 flex justify-around gap-4"
            >
              <div>
                <img
                  src={arrival2}
                  alt="fresh fruit"
                  className="w-[40vw] h-[40vh] transform transition duration-500 hover:scale-110"
                />
              </div>
              <div className="pt-12 ml-16 ">
                <h3 className="font-urbanist font-bold text-lg hover:text-[#FF9C00]">
                  Vegan Fresh Tomato
                </h3>
                <p className="p-4 text-[#45AB49] font-bold">$87.00 (per Kg)</p>
                <p className="font-semibold">
                  Sumptuous, filling, and temptingly healthy, our Biona Organi
                </p>
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  activeColor="#FF890B"
                  edit={false}
                />
              </div>
            </div>
          </div>
          <div className=" flex gap-10 justify-around pt-10 m">
            <div
              style={{
                "clip-path": "inset(0% 0% 15% 10% round 0% 15% 0 15%)",
              }}
              className="border w-[40%] h-[60%] bg-white border-transparent shadow-lg p-8 flex justify-around gap-4"
            >
              <div>
                <img
                  src={arrival3}
                  alt="fresh fruit"
                  className="w-[40vw] h-[40vh] transform transition duration-500 hover:scale-110"
                />
              </div>
              <div className="pt-12 ml-16 ">
                <h3 className="font-urbanist font-bold text-lg hover:text-[#FF9C00]">
                  Vegan Fresh Tomato
                </h3>
                <p className="p-4 text-[#45AB49] font-bold">$87.00 (per Kg)</p>
                <p className="font-semibold">
                  Sumptuous, filling, and temptingly healthy, our Biona Organi
                </p>
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  activeColor="#FF890B"
                  edit={false}
                />
              </div>
            </div>
            <div
              style={{
                "clip-path": "inset(0% 0% 15% 10% round 0% 15% 0 15%)",
              }}
              className="border w-[40%] h-[60%] bg-white border-transparent shadow-lg p-8 flex justify-around gap-4"
            >
              <div>
                <img
                  src={arrival4}
                  alt="fresh fruit"
                  className="w-[40vw] h-[40vh] transform transition duration-500 hover:scale-110"
                />
              </div>
              <div className="pt-12 ml-16 ">
                <h3 className="font-urbanist font-bold text-lg hover:text-[#FF9C00]">
                  Vegan Fresh Tomato
                </h3>
                <p className="p-4 text-[#45AB49] font-bold">$87.00 (per Kg)</p>
                <p className="font-semibold">
                  Sumptuous, filling, and temptingly healthy, our Biona Organi
                </p>
                <ReactStars
                  count={5}
                  value={rating}
                  size={24}
                  activeColor="#FF890B"
                  edit={false}
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <section className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Read trusted reviews from our customers
              </h2>

              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src={profile1}
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        Saranda Scott
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    I've been sourcing agricultural products for my farm for
                    years, but nothing compares to the quality and service I
                    experienced with Agrisales. The knowledgeable staff guided
                    me in choosing the right products for my soil and climate,
                    making a noticeable difference in my farm's productivity. I
                    highly recommend Agrisales for any farmer looking to enhance
                    their operations.
                  </p>
                </blockquote>

                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src={profile2}
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        Christy Sarah
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    Their commitment to quality and customer satisfaction is
                    unmatched. I purchased a range of tools and equipment from
                    them, and the durability and efficiency of these products
                    have exceeded my expectations. Agrisales has become my go-to
                    source for all agricultural needs, and I couldn't be happier
                    with the results.
                  </p>
                </blockquote>

                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt=""
                      src={profile3}
                      className="size-14 rounded-full object-cover"
                    />

                    <div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        Desmond scott
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700">
                    The staff's expertise and willingness to assist with my
                    queries were incredibly reassuring. Thanks to Agrisales, my
                    farm is thriving, and I've seen a significant increase in
                    both yield and quality of my produce. Agrisales is truly a
                    customer's best friend.
                  </p>
                </blockquote>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;

function Boxwrapper({ children }) {
  return (
    <div className="bg-white py-5 px-12 mb-7 rounded-full">{children}</div>
  );
}
