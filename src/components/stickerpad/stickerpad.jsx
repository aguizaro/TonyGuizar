import "./stickerpad.css";

const stickerPAD = () => {
  return (
    <div id="stickerpad">
      <div className="container" id="stickerpad-body">
        <h1 className="text-center display-4" id="stickerpad-title">
          stickerPAD
        </h1>
        <div className="media-row">
          <img
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/SP1.2.png?raw=true"
            alt="stickerpad"
            className="stickerpad-media"
            loading="lazy"
          />
          <img
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/SP2.gif?raw=true"
            alt="stickerpad"
            className="stickerpad-media"
            loading="lazy"
          />
        </div>
        <div className="jumbotron" id="stickerpad-jumbotron">
          <p className="stickerpad-text">
            I created this project for my university course. I wanted to create
            a simple and fun web application for users to draw and add emojis to
            their canvas.
          </p>
          <p className="stickerpad-text">
            I used Typescript and{" "}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Vite
            </a>{" "}
            to build this project. I started by creating a simple design for the
            application. I wanted to keep the user interface clean and easy to
            use while while still providing the abilities to create and print...
          </p>
          <p>
            Feel free to try out the{" "}
            <a
              href="https://aguizaro.github.io/stickerPAD/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              demo
            </a>{" "}
            for yourself!
          </p>
        </div>
      </div>
    </div>
  );
};

export default stickerPAD;
