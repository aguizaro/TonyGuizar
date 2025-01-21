import { LazyVideo } from "../LazyImage/LazyMedia";
import "./prodtimer.css";

const ProdTimer = () => {
  return (
    <div id="prodtimer">
      <div className="container" id="prodtimer-body">
        <h1 className="text-center display-4" id="prodtimer-title">
          Productivity Timer
        </h1>
        <div className="media-row">
          <LazyVideo
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/PT1.mp4?raw=true"
            alt="Productivity Timer Demo"
            hash={"LHAogdsmj:S6pfS|j^som%sCV@XN"}
            poster={
              "https://github.com/aguizaro/TonyGuizar/blob/main/public/img/PT0.png?raw=true"
            }
          ></LazyVideo>
        </div>
        <div className="jumbotron" id="prodtimer-jumbotron">
          <p className="prodtimer-text">
            I created this production timer to help me manage my time more
            effectively. I have always struggled with time management, so I
            decided to create a tool that would help me stay on track and
            focused on my tasks.
          </p>

          <p className="prodtimer-text">
            The production timer is a simple web application that allows me to
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
        </div>
      </div>
    </div>
  );
};

export default ProdTimer;
