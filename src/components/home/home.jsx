//import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4 ">Welcome!</h1>
        <p className="lead">This site is currently under development.</p>
        <p className="lead text-default">
          I created this site to display my projects, develop new skills, and
          share things that interest me.
        </p>
        <p className="lead">
          Currently, I am working on an online multiplayer golf party game for a
          university course. Im using{" "}
          <a
            href="https://unity.com/solutions/gaming-services"
            target="_blank"
            style={{ textDecoration: "none" }}
            rel="noreferrer"
          >
            {" "}
            Unity Gaming Services
          </a>{" "}
          and C# to develop a seamless and enjoyable online experience that can
          be played on any modern browser.
        </p>
        <div className="btngroup">
          <a
            className="btn btn-lg"
            id="current-proj-btn"
            href="https://aguizaro.github.io/GolfSite/"
            target="_blank"
            rel="noreferrer"
            role="button"
          >
            Check it out
          </a>
          <a
            className="btn btn-lg"
            id="proj-btn"
            href="./#/projects"
            role="button"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
