
import { useState } from "react";
import { IoMdStar } from "react-icons/io";


const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  return (
    <div className="flex">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <IoMdStar
            className={
              index <= rating ? "text-[#FF890B]  " : "text-[#C5C5C5] flex"
            }
            key={index}
            onClick={() => handleClick(index)}
            size={24}
          />
        );
      })}
    </div>
  );
};
export default StarRating;
