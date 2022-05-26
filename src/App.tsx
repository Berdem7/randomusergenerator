import React from "react";
import { useState } from "react";
import AddUser from "./AddUser";

function App() {
  const [isShown, setIsShown] = useState(false);

  const buttonStyle = {
    backgroundColor: "orange",
  };

  return (
    <div className="App">
      <header className="App-header">
        <button style={buttonStyle}>Home</button>
        <button>Users</button>
        <button>Add User</button>
        <button>Not Found</button>
      </header>
      <div>
        <img />
      </div>
      <AddUser />
      <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        Hover over me!
      </button>
      {isShown && <div>I'll appear when you hover over the button.</div>}
    </div>
  );
}

export default App;
