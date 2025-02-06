import { LazyImage, LazyVideo } from "../LazyImage/LazyMedia";
import "./mazegen.css";

const MazeGen = () => {
  return (
    <div id="mazegen">
      <div className="container" id="mazegen-body">
        <h1 className="text-center display-4" id="mazegen-title">
          Maze Generator
        </h1>
        <div className="media-row" id="mazegen-media-row">
          <a href="https://aguizaro.github.io/MazeGenerator/">
            <LazyImage
              src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/MG0.png?raw=true"
              alt="Maze Generator"
              hash={"LsO{LXoe.ij]afWXofj?t$j?a2jc"}
            />
          </a>
          <LazyVideo
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/MG1.mp4?raw=true"
            alt="Maze Generator Demo"
            hash={"LHAogdsmj:S6pfS|j^som%sCV@XN"}
            poster=""
          />
        </div>
        <div className="jumbotron" id="mazegen-jumbotron">
          <p className="mazegen-text">
            I created a Maze Generator in{" "}
            <a
              href="https://p5js.org/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              p5.js
            </a>{" "}
            that uses backtracking, inspired by the recursive backtracking
            algorithm described on the{" "}
            <a
              href="https://weblog.jamisbuck.org/2010/12/27/maze-generation-recursive-backtracking"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              BuckBlog
            </a>
            . This project lets users select start and end points, generating a
            solvable maze.
          </p>
          <p className="mazegen-text">
            It features an option to reveal the solution path if the maze
            becomes too difficult to solve. I used the{" "}
            <a
              href="https://en.wikipedia.org/wiki/A*_search_algorithm"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              A* pathfinding algorithm
            </a>{" "}
            to calculate the shortest path between two points. While the
            backtracking algorithm is limited to the canvas size, a
            &apos;random&apos; button allows endless maze generation until
            stopped by the user.
          </p>
          <p className="mazegen-text">
            The project visually demonstrates the algorithms frame-by-frame,
            updating dynamically. I also added sound effects and a cell resizing
            feature for extra customization and fun.
          </p>
          <p className="mazegen-text">
            You can check out my{" "}
            <a
              href="https://github.com/aguizaro/MazeGenerator"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              source code
            </a>{" "}
            and{" "}
            <a
              href="https://aguizaro.github.io/MazeGenerator/"
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

export default MazeGen;
