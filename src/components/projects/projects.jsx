import { LazyImage } from "../LazyImage/LazyMedia";
import "./projects.css";
//import LazyImage from "../LazyImage/LazyImage";
// Bootstrap Layout inspired by: https://getbootstrap.com/docs/4.0/examples/album/

const Projects = () => {
  return (
    <div className="proj">
      <div className="row justify-content-center">
        <div className="col-md-11">
          <div className="jumbotron">
            <h1 className="display-4">Projects</h1>
            <p className="lead">
              Here are some of my projects. I have created games primarily in
              Unity using C# and have built web applications using various tools
              and technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card mb-4 box-shadow">
              <a href="./#/InTheRough">
                <LazyImage
                  src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/ITR0.png?raw=true"
                  alt="In The Rough"
                  hash={"LbBO~jg3H?V@c[Rlnnent+bItmkC"}
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

          <div className="col-md-5">
            <div className="card mb-4 box-shadow">
              <a href="./#/futplanner">
                <LazyImage
                  src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/FP1.png?raw=true"
                  alt="FutPlanner"
                  hash={"L055axwP8yF.ynsqVbOk%_SJ%{wP"}
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
          <div className="col-md-5">
            <div className="card mb-4 box-shadow">
              <a href="./#/ArticleGen">
                <LazyImage
                  src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/AG0.png?raw=true"
                  alt="AlriteGen"
                  hash={"L04_tiof00ay%Mj[M{ay00WB~qof"}
                />
              </a>
              <div className="card-body">
                <p className="card-text">
                  This is a web application that generates satirical news
                  articles inspired by current events. Users can select a news
                  category and generate a random article. The API service is
                  built with Node, Express, MongoDB and is deployed on an AWS
                  Lightsail VPS. The front end utilizes Vite and is deployed on
                  GitHub pages. I utilized NewsAPI to collect real news articles
                  and leveraged OpenAI API to generate satirical content.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      onClick={() => (window.location.href = "./#/ArticleGen")}
                      className="btn btn-sm btn-outline-primary"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        window.open(
                          "https://aguizaro.github.io/ArticleGenerator/",
                          "_blank",
                          "noreferrer"
                        )
                      }
                      className="btn btn-sm btn-outline-success"
                    >
                      Demo
                    </button>
                  </div>
                  <small className="text-muted">APR 2024</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card mb-4 box-shadow">
              <a href="./#/Chinatown">
                <LazyImage
                  src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/CT0.png?raw=true"
                  alt="Chinatown1974"
                  hash={"LSFs[]jZbdj]oNfki^jZPXbIkDbH"}
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
          <div className="col-md-5">
            <div className="card mb-4 box-shadow">
              <a href="./#/stickerPAD">
                <LazyImage
                  src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/SP1.png?raw=true"
                  alt="stickerPAD"
                  hash={"LRFhh$^i0K9d}@$%ELNG0dI;-Ws+"}
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
          <div className="col-md-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
