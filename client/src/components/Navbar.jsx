import { useState, useEffect } from "react";

const Navbar = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);
  
  const displayNotification = ({ senderName, type }) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }
    return (
      <span className="notification">{`${senderName} ${action} your post.`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

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
      {open && (
        <div className="notifications">
          {notifications.map((n) => displayNotification(n))}
          <button className="nButton" onClick={handleRead}>
            Mark as read
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;