import "./futplanner.css";
import { LazyImage, LazyVideo } from "../LazyImage/LazyMedia";

const Futplanner = () => {
  return (
    <div id="futplanner">
      <div className="container" id="futplanner-body">
        <h1 className="text-center display-4" id="futplanner-title">
          Futplanner
        </h1>
        <div className="futplanner-media">
          <LazyVideo
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/FPdemo.mp4?raw=true"
            hash="L055axwP8yF.ynsqVbOk%_SJ%{wP"
            alt="Futplanner"
          />
        </div>
        <div className="jumbotron" id="futplanner-jumbotron">
          <p className="futplanner-text">
            I love watching and participating in sports, especially football. I
            often find myself missing many of the live events and matches
            because I had no good way of tracking when my favorite teams are
            playing.
          </p>
          <p className="futplanner-text">
            Over my 2 week winter break from university, I decided to build a
            web application for creating custom calendars of upcoming football
            games. This way I can easily check when my favorite teams are
            scheduled to play, and be notified on my mobile devices when these
            events start.
          </p>
          <p className="futplanner-text">
            This started off as an application for personal use, but when I told
            some relatives about what I was working on (also football fans),
            they were excited to try it out, so I decided to create a web
            interface for them to engage with and also for me to gain some
            experience working with front end tools like React.
          </p>
          <p className="futplanner-text">
            I used{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              React
            </a>{" "}
            and{" "}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Vite
            </a>{" "}
            to develop a front end interface that allows users to select their
            favorite teams and leagues from a dropdown list. Using the Axios
            library, the front end sends requests to my API with user defined
            data in order to display a personalized calendar.
          </p>
          <p className="futplanner-text">
            The back end API utilizes{" "}
            <a
              href="https://expressjs.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              ExpressJS
            </a>{" "}
            to handle HTTP requests and define routes on a{" "}
            <a
              href="https://nodejs.org/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              NodeJS
            </a>{" "}
            server, integrated with a{" "}
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              MongoDB
            </a>{" "}
            database for storing league and team data, as well as user data for
            an OAuth2 Google Calendar client. This API adheres to RESTful
            principles, but this was my first time creating a full stack web
            application, so I am sure I made plenty of mistakes and I welcome
            any feedback that may help me learn and improve the work that I do.
          </p>
          <p className="futplanner-text">
            My{" "}
            <a
              href="https://www.github.com/aguizaro/futplanner-api"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              FutPlanner-API
            </a>{" "}
            accepts GET requests for an unspecified number of league and team id
            pairs. These id pairs are used to retrieve data from{" "}
            <a
              href="https://www.api-football.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              API-Football
            </a>{" "}
            (or cached data from my database) of upcoming football fixtures,
            leverages the{" "}
            <a
              href="https://developers.google.com/calendar/api/guides/overview"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              Google Calendar API
            </a>{" "}
            to create a public calendar, and inserts each event into this
            calendar. The API responds with a public link to the newly created
            Google Calendar. This link can be used to embed the calendar in any
            webpage, as well as be used to import the public calendar to any
            personal Google account.
          </p>
          <p className="futplanner-text">
            I had a lot of fun creating this application and I learned a lot
            about web development. I still use this web application today when
            planning when to watch my favorite teams play.
          </p>
        </div>
        <div className="futplanner-media">
          <div className="mobile">
            <LazyImage
              src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/FP3.png?raw=true"
              hash="L2Cr5T0c000vG?R6-qxH3t]u:_,M"
              alt="Futplanner"
            />
            <LazyVideo
              src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/FPdemoMobile.mp4?raw=true"
              hash="LEIF6-My00RP00xb~XozIns;ogbG"
              alt="Futplanner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Futplanner;
