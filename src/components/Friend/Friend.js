import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`friend/${id}`);
  };
  console.log(friend);
  const { name, id, email, username } = friend;
  return (
    <div className="text-center p-5 border border-black">
      <h1>name:{name}</h1>
      <p>email:{email}</p>
      <p>
        <Link to={`/friend/${id}`}>username:{username}</Link>
        <button onClick={handleNavigate}>show details</button>
      </p>
    </div>
  );
};

export default Friend;
