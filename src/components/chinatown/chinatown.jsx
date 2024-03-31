import "./chinatown.css";

const Chinatown = () => {
  return (
    <div id="chinatown">
      <div className="container" id="chinatown-body">
        <h1 className="text-center display-4" id="chinatown-title">
          Chinatown
        </h1>
        <div className="media-row">
          <img
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/CT0.png?raw=true"
            alt="Chinatown"
            className="chinatown-media"
            loading="lazy"
          />
          <img
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/CT1.gif?raw=true"
            alt="Chinatown"
            className="chinatown-media"
            loading="lazy"
          />
        </div>
        <div className="media-row">
          <img
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/CT2.gif?raw=true"
            alt="Chinatown"
            className="chinatown-media"
            loading="lazy"
          />
          <img
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/CT3.gif?raw=true"
            alt="Chinatown"
            className="chinatown-media"
            loading="lazy"
          />
        </div>
        <div className="jumbotron" id="chinatown-jumbotron">
          <p className="chinatown-text">
            I am currently working on this project with a few classmates for our
            university course. We are in the pre-production phase and are
            developing a vertical slice for this game.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chinatown;
