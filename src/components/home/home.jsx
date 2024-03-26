//import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Welcome!</h1>
        <p className="lead">This site is currently under development.</p>
        <p className="lead">
          I created this site to display my projects, develop new skills, and
          share my passion for software development.
        </p>
        <p className="lead">
          Currently, I am working on a multiplayer golf party game for a
          university course. Im using the Unity game engine and C# to develop a
          seamless and enjoyable online experience.
        </p>
        <a
          className="btn btn-primary btn-lg"
          href="https://aguizaro.github.io/GolfSite/"
          role="button"
        >
          Check it out
        </a>
      </div>
    </div>
  );
};

export default Home;
