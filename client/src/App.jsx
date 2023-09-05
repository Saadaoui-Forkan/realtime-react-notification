import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { posts } from "./data";
const { io } = require("socket.io-client");

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null)
  
  useEffect(()=>{
    setSocket(io("http://localhost:3001"))
  }, [])

  useEffect(()=> {
    socket?.emit("newUser", user)
  }, [socket, user])

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar 
            socket = {socket}
          />
          {posts.map((post) => (
            <Card 
              key={post.id} 
              post={post} 
              user={user}
              socket = {socket}
            />
          ))}
          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <h2>My App</h2>
          <input 
            type="text" 
            placeholder="username" 
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
          />
          <button
            onClick={()=>setUser(username)}
          >Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
