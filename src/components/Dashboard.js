import React, { useContext, useState } from "react";
import Context from "../utils/Context";

const Dashboard = () => {
  const { mode, users } = useContext(Context);
  
  return (
    <div className="page">
      <div className={`container ${mode}`}>
        <ul>
          {users.map((user) => {
            return <li>{user.username} {user.email}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
