import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <div className="bg-[url(slider-01.jpg)] bg-cover w-full h-[90vh] flex flex-col justify-center pl-20 gap-8 bottom-0 left-0 right-0 transition duration-300 ease-in-out transform mb-16">
        <h2 className="text-3xl font-semibold text-[#FF9C00]">
          Welcome to Agrisales
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
      <div className="bg-[#f3f6f0] h-[80vh] relative flex flex-col md:flex-row justify-center gap-16 w-full px-24 py-8">
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
          <h2>ABOUT COMPANY</h2>
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
            className="text-white hover:bg-[#FF9C00] px-4 py-3 w-[50%]  text-center text-lg font-semibold rounded-lg bg-[#45AB49]"
          >
            Read More
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home

function Boxwrapper({children}){
  return <div className="bg-white py-5 px-12 mb-7 rounded-full">{children}</div>
}