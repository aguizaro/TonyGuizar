import "./projects.css";
//import LazyImage from "../LazyImage/LazyImage";
// Bootstrap Layout inspired by: https://getbootstrap.com/docs/4.0/examples/album/

const Projects = () => {
  return (
    <div className="proj">
      <div className="jumbotron">
        <h1 className="display-4">Projects</h1>
        <p className="lead-hidden">
          Here are some of my projects. I have created games primarily in Unity
          using C# and have built web applications using various tools and
          technologies.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 box-shadow">
              <a href="./#/InTheRough">
                <img
                  className="card-img-top"
                  src="public/img/ITR0.png"
                  alt="Card image cap"
                  loading="lazy"
                />
              </a>
              <div className="card-body">
                <p className="card-text">
                  <em> In The Rough </em> is a global multiplayer golf party
                  game being developed for a univeristy course. The team and I
                  hope to deliver a seamless and entertaining party game
                  experience. I am working on the networking and deployment for
                  this project.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      onClick={() => (window.location.href = "./#/InTheRough")}
                      className="btn btn-sm btn-outline-primary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          "https://aguizaro.github.io/GolfSite/",
                          "_blank",
                          "noreferrer"
                        )
                      }
                      className="btn btn-sm btn-outline-success"
                    >
                      Source
                    </button>
                  </div>
                  <small className="text-muted">MAR 2024</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4 box-shadow">
              <a href="./#/futplanner">
                <img
                  className="card-img-top"
                  src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/FP1.png?raw=true"
                  alt="Card image cap"
                  loading="lazy"
                />
              </a>
              <div className="card-body">
                <p className="card-text">
                  Never miss your favorite football matches again with{" "}
                  <em>FutPlanner</em>! This web application allows the user to
                  select their favorite football teams and leagues, then will
                  create a personalized planner of upcoming matches that can be
                  imported into any Google account.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      onClick={() => (window.location.href = "./#/futplanner")}
                      className="btn btn-sm btn-outline-primary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          "https://github.com/aguizaro/FutPlanner/",
                          "_blank",
                          "noreferrer"
                        )
                      }
                      className="btn btn-sm btn-outline-success"
                    >
                      Source
                    </button>
                  </div>
                  <small className="text-muted">JAN 2024</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4 box-shadow">
              <a href="./#/stickerPAD">
                <img
                  className="card-img-top"
                  src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/SP1.png?raw=true"
                  alt="Card image cap"
                  loading="lazy"
                />
              </a>
              <div className="card-body">
                <p className="card-text">
                  <em> stickerPAD </em> is a sketch pad program crafted with
                  Typescript and developed using Vite. It offers a creative
                  space for users to draw and express themselves. Enjoy the
                  playful addition of emoji stickers to add a touch of fun to
                  your sketches!
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      onClick={() => (window.location.href = "./#/stickerPAD")}
                      className="btn btn-sm btn-outline-primary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          "https://aguizaro.github.io/stickerPAD/",
                          "_blank",
                          "noreferrer"
                        )
                      }
                      className="btn btn-sm btn-outline-success"
                    >
                      Demo
                    </button>
                  </div>
                  <small className="text-muted">OCT 2023</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card mb-4 box-shadow">
              <a href="./#/Chinatown">
                <img
                  className="card-img-top"
                  src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/CT0.png?raw=true"
                  alt="Card image cap"
                  loading="lazy"
                />
              </a>
              <div className="card-body">
                <p className="card-text">
                  This is a video game adaptation of the 1974 film{" "}
                  <em> Chinatown </em> and was made as a class project. It is
                  written in JavaScript and uses the Phaser 3 game framework.
                  The game world is constructed using Tiled and the site is
                  deployed on GitHub pages. Click on the demo button to play!
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      onClick={() => (window.location.href = "./#/stickerPAD")}
                      className="btn btn-sm btn-outline-primary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          "https://aguizaro.github.io/Chinatown/",
                          "_blank",
                          "noreferrer"
                        )
                      }
                      className="btn btn-sm btn-outline-success"
                    >
                      Demo
                    </button>
                  </div>
                  <small className="text-muted">JUN 2023</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
