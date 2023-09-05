import { useState } from "react";

const Card = ({ post, user }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    liked ? setLiked(false) : setLiked(true);
  }

  return (
    <div className="card">
      <div className="info">
        <img
          src={post.userImg}
          alt=""
          className="userImg"
        />
        <span>{post.fullname}</span>
      </div>
      <img
        src="https://images.pexels.com/photos/9730025/pexels-photo-9730025.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="postImg"
      />
      <div className="interaction">
        <i className={liked ? "fa-regular fa-heart cardIcon isLiked" : "fa-regular fa-heart cardIcon"}
          onClick={handleLike}
        ></i>        
        <i className="fa-regular fa-comment cardIcon"></i>
        <i className="fa-solid fa-arrow-up-right-from-square cardIcon"></i>
        <i className="fa-solid fa-circle-info cardIcon infoIcon"></i>
      </div>
    </div>
  );
};

export default Card;
