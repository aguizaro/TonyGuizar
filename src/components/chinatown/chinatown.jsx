import "./chinatown.css";

const Chinatown = () => {
  return (
    <div id="chinatown">
      <div className="container" id="chinatown-body">
        <h1 className="text-center display-4" id="chinatown-title">
          Chinatown 1974
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
        <div className="jumbotron" id="chinatown-jumbotron">
          <p>
            <a
              href="https://www.imdb.com/title/tt0071315/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              Chinatown
            </a>{" "}
            is a 1974 American neo-noir mystery film directed by Roman Polanski
            from a screenplay by Robert Towne, starring Jack Nicholson and Faye
            Dunaway. The film was inspired by the{" "}
            <a
              href="https://en.wikipedia.org/wiki/California_water_wars"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              California water wars
            </a>
            , a series of disputes over southern California water at the
            beginning of the 20th century, by which Los Angeles interests
            secured water rights in the Owens Valley.
          </p>
          <p>
            This web game, created as part of a class project, offers players an
            immersive experience directly in their web browser. Built using
            JavaScript and the{" "}
            <a
              href="https://phaser.io/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              Phaser
            </a>{" "}
            game framework, the game leverages Phaser3 to manage scene
            transitions, design the user interface, and shape gameplay
            mechanics.
          </p>
          <p>
            Drawing inspiration from <em>Grand Theft Auto 2</em> (1999), the
            game features top-down perspective driving gameplay, providing
            players with the thrill of navigating a city environment and
            engaging in pursuits. To aid navigation, a minimap feature was
            incorporated, developed using Phaser&apos;s camera system for
            seamless integration.
          </p>
          <p>
            For collision management, Phaser&apos;s physics system was utilized
            to detect collision layers defined in{" "}
            <a
              href="https://www.mapeditor.org/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              Tiled
            </a>
            , a level editor used to craft the game world. This allowed for
            precise control over player interactions with the environment,
            enhancing gameplay realism.
          </p>
          <p>
            Additionally, the game experience was enriched with subtle yet
            impactful features. Camera shake effects were implemented to
            simulate collisions, adding a juicy feel to gameplay, while sound
            effects provided immediate feedback and heightened immersion for
            players, enhancing overall engagement.
          </p>
          <p>
            Feel free to check out the{" "}
            <a
              href="https://aguizaro.github.io/Chinatown/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              live demo
            </a>{" "}
            !
          </p>
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
      </div>
    </div>
  );
};

export default Chinatown;
