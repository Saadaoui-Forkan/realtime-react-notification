import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  return (
    <div className="container">
      <>
        <Navbar />
        <Card />
      </>

      <div className="login">
        <h2>Lama App</h2>
        <input
          type="text"
          placeholder="username"
        />
        <button >Login</button>
      </div>
    </div>
  );
};

export default App;
