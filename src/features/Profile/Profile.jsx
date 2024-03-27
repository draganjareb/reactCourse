import React from "react";
import "./Profile.css";

const Profile = ({ name, age, city, email, imageUrl }) => {
  return (
    <div className="myDiv">
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{age}</p>
      <p>{city}</p>
      <p>{email}</p>
    </div>
  );
};

export default Profile;
