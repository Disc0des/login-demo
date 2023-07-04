import React, { useContext, useState, useEffect } from "react";
import Context from "../utils/Context";
import axios from "axios";

const Dashboard = () => {
  const { mode } = useContext(Context);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_HOST}/users`)
      .then((response) => {
        setUsers(response.data)
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
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
