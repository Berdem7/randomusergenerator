import React from "react";

export default function AddUser() {
  function GenerateUser(e: any) {
    // console.log(e.target.parentNode);
    // console.log(e);
    e.target.parentNode.innerHTML = <div>haha</div>;
    // return <div> New User</div>;
  }

  return (
    <div>
      <button onClick={GenerateUser}>Generate Random User</button>
    </div>
  );
}
