import { LazyVideo } from "../LazyImage/LazyMedia";
import "./prodtimer.css";

const ProdTimer = () => {
  return (
    <div id="prodtimer">
      <div className="container" id="prodtimer-body">
        <h1 className="text-center display-4" id="prodtimer-title">
          Productivity Timer
        </h1>
        <div className="media-row" id="prodtimer-vid-row">
          <LazyVideo
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/PT1.mp4?raw=true"
            alt="Productivity Timer Demo"
            hash={"LHAogdsmj:S6pfS|j^som%sCV@XN"}
            poster={
              "https://github.com/aguizaro/TonyGuizar/blob/main/public/img/PT0-Poster.png?raw=true"
            }
          />
        </div>
        <div className="jumbotron" id="prodtimer-jumbotron">
          <p className="prodtimer-text">
            I created this productivity timer to help me manage my time more
            effectively. I have always struggled with time management, so I
            decided to create a tool that would help me stay on track and
            focused on my tasks.
          </p>

          <p className="prodtimer-text">
            The productivity timer is a simple web application that allows me to
            set a timer for each task I need to complete. I can set the duration
            of the timer and add a description of the task. Once the timer is
            started, it will count down to zero, and then notify me with an
            alert sound and a visual notification.
          </p>

          <p className="prodtimer-text">
            I have found this tool to be incredibly helpful in keeping me
            focused and on track with my work. It has helped me break down my
            tasks into manageable chunks and stay motivated throughout the day.
          </p>

          <p className="prodtimer-text">
            I plan to continue improving this tool and adding new features to
            make it even more useful for myself and others who struggle with
            time management.
          </p>

          <p className="prodtimer-text">
            You can check out my{" "}
            <a
              href="https://github.com/aguizaro/ProductivityTimer/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              source code
            </a>{" "}
            and try the{" "}
            <a
              href="https://aguizaro.github.io/ProductivityTimer/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              live demo
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProdTimer;
