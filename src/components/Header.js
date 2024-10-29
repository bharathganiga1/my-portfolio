import React from 'react';
import '../styles/header.css'; 

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <h1 className="header-title">
          {Array.from("BHARATH").map((letter, index) => (
            <span key={index} className="letter">{letter}</span>
          ))}
        </h1>
      </div>
      <div className="header-right">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

