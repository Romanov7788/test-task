import React from "react";
import "./Home.scss";  // Добавим стили

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="main-title">Welcome to the Video Player App</h1>
      <p className="description">Select a video from the playlist or upload your own!</p>
    </div>
  );
};

export default Home;
