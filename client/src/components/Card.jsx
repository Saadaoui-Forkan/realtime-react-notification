import { useState } from "react";

const Card = ({ socket, post, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

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
        { 
          liked 
          ? 
          (<i className= "fa-regular fa-heart cardIcon isLiked" 
            onClick={()=>setLiked(false)}
          ></i>) 
          : 
          (<i className= "fa-regular fa-heart cardIcon"
            onClick={() => handleNotification(1)}
          ></i>) 
        }        
        <i 
          className="fa-regular fa-comment cardIcon"
          onClick={() => handleNotification(2)}
        ></i>
        <i 
          className="fa-solid fa-arrow-up-right-from-square cardIcon"
          onClick={() => handleNotification(3)}
        ></i>
        <i className="fa-solid fa-circle-info cardIcon infoIcon"></i>
      </div>
    </div>
  );
};

export default Card;
