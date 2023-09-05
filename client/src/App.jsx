import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { posts } from "./data";
const { io } = require("socket.io-client");

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  
  useEffect(()=>{
    const socket = io("http://localhost:3001")
    socket.on("firstEvent", (msg)=>{
      console.log(msg)
    })
  }, [])

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          {posts.map((post) => (
            <Card 
              key={post.id} 
              post={post} 
              user={user}
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
