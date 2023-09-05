import { useState, useEffect } from "react";

const Navbar = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <span className="logo">My App</span>
      <div className="icons">
        <div className="icon">
          <span className="counter">3</span>
          <i className="fa-solid fa-bell iconImg"></i>
        </div>
        <div className="icon" >
          <span className="counter">2</span>
          <i className="fa-solid fa-envelope iconImg"></i>
        </div>
        <div className="icon" >
          <span className="counter">1</span>
          <i className="fa-solid fa-gear iconImg"></i>
        </div>
      </div>
        <div className="notifications">
          {/* <button className="nButton">
            Mark as read
          </button> */}
        </div>
    </div>
  );
};

export default Navbar;