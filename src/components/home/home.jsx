//import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Welcome!</h1>
        <p className="lead">
          This site is a simple portfolio site built with React and Bootstrap. I
          will use this site to showcase my work and share my thoughts.
        </p>
        <hr className="my-4" />
        <p>
          Currently, I am working on a multiplayer golf party game for a
          university course. Im using Unity and C# to develop a seamless and
          enjoyable online experience.
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
