import { LazyImage } from "../LazyImage/LazyMedia";
import "./ArticleGen.css";

const ArticleGen = () => {
  return (
    <div id="articlegen">
      <div className="container" id="articlegen-body">
        <h1 className="text-center display-4" id="articlegen-title">
          Satirical News Article Generator
        </h1>
        <div className="media-row" id="articlegen-meda-row">
          <LazyImage
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/AG2.png?raw=true"
            hash="LCB3vi~WEKWTMdMdnNxZ.S%gwuw["
            alt="articlegen"
          />
          <LazyImage
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/AG1.png?raw=true"
            hash="L15=R-;+DgTWx]r=oztS}{%}x{#t"
            alt="articlegen"
          />
        </div>
        <div className="jumbotron" id="articlegen-jumbotron">
          <p className="articlegen-text">
            This project stemmed from a creative coding class assignment that
            required us to develop a tool that generates something partially
            guided by user input. My idea was to generate satirical news
            articles based on current events similar to articles found on{" "}
            <a
              href="https://www.theonion.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              The Onion
            </a>
            .
          </p>
          <p className="articlegen-text">
            I made this into a public website where users can select a news
            category and receive a generated satirical article tailored to their
            choice. They also have the option to download the article as an
            image for seamless sharing, facilitated by{" "}
            <a
              href="https://html2canvas.hertzen.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              html2canvas
            </a>
            , which captures the webpage&apos;s DOM elements, converting them
            into a downloadable image file.
          </p>
          <p className="articlegen-text">
            I decided to develop this using JavaScript across the board since I
            was aiming to deploy this on the web. I created a{" "}
            <a
              href="https://nodejs.org/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Node.js
            </a>{" "}
            application with{" "}
            <a
              href="https://expressjs.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Express.js
            </a>{" "}
            for handling web requests and leveraged{" "}
            <a
              href="https://newsapi.org/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              NewsAPI
            </a>{" "}
            to collect current news articles. These news articles are stored in
            a{" "}
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              MongoDB
            </a>{" "}
            database via scripted processes scheduled with cron to run nightly.
          </p>
          <p className="articlegen-text">
            For generating article content, I employed{" "}
            <a
              href="https://openai.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              OpenAI
            </a>{" "}
            &apos;s natural language model to generate a comedic and satirical
            version of an existing news article stored in the database. I needed
            the output to contain: a satirical premise based on a real news
            article, an article title with a twist, article content, and a fake
            social commentary/quote. I also needed this to respond in JSON
            format, so it took some prompt engineering in order to achieve this.
          </p>
          <p className="articlegen-text">
            The backend API service receives an access key and news category
            string then responds with the generated article title, content, and
            image as a base64 encoded string. This app is a full stack web app
            containerized with{" "}
            <a
              href="https://www.docker.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Docker
            </a>{" "}
            and deployed on an AWS{" "}
            <a
              href="https://aws.amazon.com/lightsail/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Lightsail
            </a>{" "}
            VPS and{" "}
            <a
              href="https://traefik.io/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Traefik
            </a>{" "}
            as a reverse proxy to route requests to the appropriate service. I
            am using{" "}
            <a
              href="https://letsencrypt.org/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Let&apos;s Encrypt
            </a>{" "}
            to secure the connection with SSL certificates.
          </p>
          <p className="articlegen-text">
            Feel free to check out the{" "}
            <a
              href="https://letsgeneratearticles.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
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

export default ArticleGen;
