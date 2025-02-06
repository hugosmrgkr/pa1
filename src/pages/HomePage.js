import React from "react";
import "../App.css"; // Import file CSS

const HomePage = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-section">
        <h1>Monogram Toba Studio</h1>
        <p>Balige, Toba</p>
        <button className="hire-btn">HERE ME</button>
      </div>
      
      {/* Right Section */}
      <div className="right-section">
        <img
          src="/pa1.png"
          alt="Photographer"
          className="image"
        />
      </div>
      
      {/* Navigation */}
      <nav className="nav-bar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
};

export default HomePage;
