
const Navbar = () => {

  return (
    <div className="navbar">
      <span className="logo">Lama App</span>
      <div className="icons">
        <div className="icon">
          <i className="fa-solid fa-bell iconImg"></i>
        </div>
        <div className="icon" >
          <i className="fa-solid fa-envelope iconImg"></i>
        </div>
        <div className="icon" >
          <i className="fa-solid fa-gear iconImg"></i>
        </div>
      </div>
        <div className="notifications">
          <button className="nButton">
            Mark as read
          </button>
        </div>
    </div>
  );
};

export default Navbar;