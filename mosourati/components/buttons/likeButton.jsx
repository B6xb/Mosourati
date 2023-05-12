import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { useState } from "react";

const LikeButton = ({ onClick }) => {
  const [liked, setLiked] = useState(true);

  const handleLike = (e) => {
    onClick();
    setLiked(!liked);
  };
  return (
    <button onClick={handleLike}>
      <div className="hover:scale-125 duration-500">
        {liked ? (
          <AiOutlineLike size={25} className="pr-[3px] " />
        ) : (
          <AiOutlineDislike size={25} className="pr-[3px] " />
        )}
      </div>
    </button>
  );
};

export default LikeButton;
