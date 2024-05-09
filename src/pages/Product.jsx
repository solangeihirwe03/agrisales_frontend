import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";

const Product = () => {
  return (
    <div className="flex flex-col w-full md:flex-wrap md:flex-row gap-7 py-20 text-lg justify-center">
      <div className="md:w-[20%] w-full flex flex-col items-center">
        <img
          src="maize.jpg"
          alt="maize"
          className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
        />
        <p>Legumes</p>
        <div className="flex gap-2">
          <FontAwesomeSvgIcon icon={faCartShopping} className="w-[20px] " />
          <p>Add to cart</p>
        </div>
      </div>

      <div className="md:w-[20%] w-full flex flex-col items-center">
        <img
          src="potato.jpg"
          alt="potato"
          className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
        />
        <p>Potatoes</p>
        <div className="flex gap-2">
          <FontAwesomeSvgIcon icon={faCartShopping} className="w-[20px]" />
          <p>Add to cart</p>
        </div>
      </div>

      <div className="md:w-[20%] w-full flex flex-col items-center">
        <img
          src="orange.jpg"
          alt="orange"
          className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
        />
        <p>orange</p>
        <div className="flex gap-2">
          <FontAwesomeSvgIcon icon={faCartShopping} className="w-[20px]" />
          <p>Add to Cart</p>
        </div>
      </div>

      <div className="md:w-[20%] w-full flex flex-col items-center">
        <img
          src="carrot.jpg"
          alt="carrot"
          className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
        />
        <p>Carrots</p>
        <div className="flex gap-2">
          <FontAwesomeSvgIcon icon={faCartShopping} className="w-[20px]" />
          <p>Add to cart</p>
        </div>
      </div>

      <div className="md:w-[20%] w-full flex flex-col items-center">
        <img
          src="vegetables.jpeg"
          alt="vegetables"
          className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
        />
        <p>vegetables</p>
        <div className="flex gap-2">
          <FontAwesomeSvgIcon icon={faCartShopping} className="w-[20px]" />
          <p>Add to cart</p>
        </div>
      </div>

      <div className="md:w-[20%] w-full flex flex-col items-center">
        <img
          src="apples.png"
          alt="apples"
          className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
        />
        <p>apples</p>
        <div className="flex gap-2">
          <FontAwesomeSvgIcon icon={faCartShopping} className="w-[20px]" />
          <p>Add to cart</p>
        </div>
      </div>

      <div className="md:w-[20%] w-full flex flex-col items-center">
        <img
          src="eggs.jpg"
          alt="eggs"
          className="w-full h-[27vh] inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
        />
        <p>Eggs</p>
        <div className="flex gap-2">
          <FontAwesomeSvgIcon icon={faCartShopping} className="w-[20px]" />
          <p>Add to cart</p>
        </div>
      </div>

      <div className="md:w-[20%] w-full flex flex-col items-center">
        <img
          src="brocolli.jpg"
          alt="brocolli"
          className="w-full inset-0 transition delay-100 duration-500 hover:brightness-50 hover:hover-from-bottom"
        />
        <p>Brocolli</p>
        <div className="flex gap-2">
          <FontAwesomeSvgIcon icon={faCartShopping} className="w-[20px]" />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
}

export default Product
