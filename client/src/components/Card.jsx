
const Card = () => {

  return (
    <div className="card">
      <div className="info">
        <img src="https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="userImg" />
        <span>fullname</span>
      </div>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="postImg" />
      <div className="interaction">
        <img src="https://images.pexels.com/photos/3497624/pexels-photo-3497624.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="cardIcon" />
        <i className="fa-solid fa-heart cardIcon"></i>
        <i className="fa-solid fa-comment cardIcon"></i>
        <i className="fa-solid fa-share-nodes cardIcon"></i>
        <i className="fa-solid fa-circle-info cardIcon infoIcon"></i>
      </div>
    </div>
  );
};

export default Card;
