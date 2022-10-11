import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendsDetails = () => {
  const friends = useLoaderData();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/friends`);
  };
  return (
    <div className="text-center">
      <h1 className="text-3xl p-4">Username:{friends.username}</h1>
      <p>call for all information:{friends.phone}</p>
      <button className="p-4 bg-green-500" onClick={handleNavigate}>
        get the athur
      </button>
    </div>
  );
};

export default FriendsDetails;
