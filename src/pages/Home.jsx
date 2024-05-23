import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import "./Farmerr.css";
import arrival1 from "../../public/arrival1.png";
import arrival2 from "../../public/arrival2.png";
import arrival3 from "../../public/arrival3.png";
import arrival4 from "../../public/arrival4.png";
import ReactStars from "react-rating-stars-component";
import Footer from "./Footer"

const Home = () => {
  const rating = 5;
  return (
    <div>
      <div className="font-bold flex justify-between px-[10%] py-4 items-center text-lg">
        <Link>
          <p className="text-4xl ">
            <span className="text-[#45AB49]">AGRI</span>sales
          </p>
        </Link>
        <ul className="flex items-center gap-3">
          <li className="flex space-x-4">
            <div className="flex justify-center items-center space-x-8">
              <NavLink to="/AboutUs">About Us</NavLink>
              <NavLink to="/Shop">Shop</NavLink>

              <NavLink to="/Profile">
                {<IoPerson className="w-[20px]" />}
              </NavLink>
              <li>
                <NavLink
                  to="/Login"
                  className="md:flex  py-2 px-2 bg-[#FF9C00] text-white font-medium rounded"
                >
                  Login
                </NavLink>
              </li>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-[url(slider-01.jpg)] bg-cover w-full h-[90vh] flex flex-col justify-center pl-20 gap-8 bottom-0 left-0 right-0 transition duration-300 ease-in-out transform mb-16">
        <h2 className="text-3xl font-semibold text-[#FF9C00]">
          Welcome to AGRIsales
        </h2>
        <h4 className="text-7xl text-white font-urbanist font-bold">
          Grow, Connect, and <br />
          Thrive Together
        </h4>
        <Link
          to="/shop"
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
                {/* <img src={stars} className="pt-8 flex items-center" /> */}
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
      </div>
      <Footer/>
    </div>
  );
};

export default Home;

function Boxwrapper({ children }) {
  return (
    <div className="bg-white py-5 px-12 mb-7 rounded-full">{children}</div>
  );
}
