import "./LikeContainer.css";

import { BsHeart, BsHeartFill } from "react-icons/bs";

export const LikeContainer = ({ photo, user, handleLike } : 
    { photo: any; user: any; handleLike: any }) => {
  return (
    <div className="like">
      {photo.likes && user && (
        <>
          {photo.likes.includes(user._id) ? (
            <BsHeartFill />
          ) : (
            <BsHeart onClick={() => handleLike(photo)} />
          )}
          <p>{photo.likes.length} like(s)</p>
        </>
      )}
    </div>
  );
};