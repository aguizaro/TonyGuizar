//import React from 'react';
import "./projects.css";

// Bootstrap Layout inspired by: https://getbootstrap.com/docs/4.0/examples/album/

const Projects = () => {
  return (
    <div id="projects">
      <div className="album py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h1 className="display-4">Projects</h1>
                <p className="lead-hidden">
                  Here are some of my projects. I have created games primarily
                  in Unity using C# and have built web applications using
                  various tools and technologies.
                </p>
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
                    create a personalized planner of upcoming matches that can
                    be imported into any Google account.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        onClick={() =>
                          (window.location.href = "./#/futplanner")
                        }
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          (window.location.href =
                            "https://www.github.com/aguizaro/futplanner")
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
                <a href="./#/InTheRough">
                  <img
                    className="card-img-top"
                    src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/FP0.png?raw=true"
                    alt="Card image cap"
                    loading="lazy"
                  />
                </a>
                <div className="card-body">
                  <p className="card-text">
                    <em> In The Rough </em> is a global multiplayer golf party
                    game being developed for a univeristy course. The team and I
                    hope to deliver a seamless and entertaining party game
                    experience. I am working on the networking and deployment
                    for this project.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        onClick={() =>
                          (window.location.href = "./#/InTheRough")
                        }
                        className="btn btn-sm btn-outline-primary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          (window.location.href =
                            "https://aguizaro.github.io/GolfSite/")
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
