import { LazyVideo } from "../LazyImage/LazyMedia";
import "./lilghost.css";

const lilghost = () => {
  return (
    <div id="lilghost">
      <div className="container" id="lilghost-body">
        <h1 className="text-center display-4" id="lilghost-title">
          Lil Ghost
        </h1>
        <div className="media-row">
          <LazyVideo
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/LG0.mp4?raw=true"
            alt="Lil Ghostr Demo"
            hash={"L1P%S1?IEl?F^%NiaIRP00s;Mvbw"}
            poster=""
          ></LazyVideo>
        </div>
        <div className="jumbotron" id="lilghost-jumbotron">
          <p className="lilghost-text">
            I created a prototype for an arcade game that only uses a single
            button. I built this using{" "}
            <a
              href="https://github.com/abagames/crisp-game-lib"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              crisp-game-lib
            </a>
            , a JavaScript library for creating browser games quickly and
            easily. The idea was to prototype a game with the constraint that it
            could only use a single button. The game is a simple endless runner
            where the player must avoid obstacles and collect powerups to
            increase their score. The game features a simple scoring system and
            a high score tracker. Crisp allowed me to focus on the game design
            rather than the game implementation, which is what made it the
            perfect tool for this prototype.
          </p>
          <p className="lilghost-text">
            When I started, I didn&apos;t really have any idea what game I
            wanted to make that would satisfy the one button constraint. All I
            knew is that I wanted to make a game where the player would need to
            think fast and tap the button quickly. I decided to just build a
            sort of playground for me to be able to try out different mechanics
            and I had a lot of fun just making a player object move up and down
            the screen when tapping the button. Eventually this turned into a
            player dodging incoming obstacles and then after adding some power
            ups and animations/particle effects, it became the game you see now.
          </p>
          <p className="lilghost-text">
            The question I was trying to answer with this individual prototype
            was: “what is the player experience like for a fast paced game where
            one wrong move will end the game in an instant?”. I really like this
            type of anxiety-inducing game where the player needs to be focused
            on many different moving parts and try to survive as long as
            possible/ accumulate as many points as they can before being taken
            out. In order to achieve this, I designed the player movement to be
            very fast and made obstacles move at varying speeds. During
            playtests, I noticed this pushed the player to tap the button very
            often and switch directions very rapidly in order to avoid the
            obstacles. Players often lost the game very quickly and re-played
            multiple times in an effort to improve their hi-score. This is
            exactly the player experience I was going for and I think it works
            really well as an endless runner.
          </p>
          <p className="lilghost-text">
            If I had more time, I would have improved the collision detection of
            the powerups. Since the power ups are made up of two rotating
            sprites that alternate visibility, the collisions are sometimes not
            detected. I also would have added more power ups, perhaps one that
            slows down time for a moment or multiplies points. I really enjoyed
            how fast paced this game is and how easy it is to lose. This makes
            players want to try over and over again. Because I like the main
            mechanic of this game so much, I would take this gameplay and try to
            recreate it in a new framework / engine that allows more
            customization and level building. I think this could work really
            well as an arcade game with progression, but that is out of the
            scope of this project.
          </p>

          <p className="lilghost-text">
            You can check out my{" "}
            <a
              href="https://github.com/aguizaro/CMPM170-P2-GHOST/blob/main/GhostGame/main.js"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              source code
            </a>{" "}
            and play it for yourself{" "}
            <a
              href="https://aguizaro.github.io/CMPM170-P2-GHOST/?GhostGame"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default lilghost;
