import { LazyImage, LazyVideo } from "../LazyImage/LazyMedia";
import "./intherough.css";

const InTheRough = () => {
  return (
    <div id="intherough">
      <div className="container" id="intherough-body">
        <h1 className="text-center display-4" id="intherough-title">
          In The Rough
        </h1>
        <div className="media-row">
          <LazyImage
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/ITR1.png?raw=true"
            hash="LI8}P.Z}PTIxFSMm${v}][b,R=OX"
            alt="In The Rough"
          />
          <LazyImage
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/ITR2.png?raw=true"
            hash="L5A1Oc0400-o1B-iznpaPW$yquK6"
            alt="In The Rough"
          />
        </div>
        <div className="jumbotron" id="intherough-jumbotron">
          <p className="intherough-text">
            A few classmates and I are working on this project for our
            university course. We are currently in pre-production and are
            developing a vertical slice for this game.
          </p>
          <p className="intherough-text">
            One of our team members, John, pitched the idea of creating a
            multiplayer golf party game that focuses more on player to player
            interactions, rather than strict golf mechanics. I joined this
            project with the intention of creating an exciting multiplayer
            experience, so I took on the role of Network and Deployment lead.
          </p>
          <p className="intherough-text">
            I started researching network solutions that would work for the type
            of gameplay we wanted and ended up using a combination of services
            provided by{" "}
            <a
              href="https://unity.com/solutions/gaming-services"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              Unity Gaming Services (UGS)
            </a>
            . We are using{" "}
            <a
              href="https://unity.com/products/netcode"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              Netcode for GameObjects
            </a>{" "}
            for real-time synchronization of game objects across the network,
            ensuring smooth and responsive gameplay experiences for players.
            Additionally, we utilize{" "}
            <a
              href="https://unity.com/products/relay"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              Relay
            </a>{" "}
            to establish reliable connections between players, overcoming
            potential network obstacles such as firewalls or NAT traversal
            issues. Finally, our implementation includes{" "}
            <a
              href="https://unity.com/products/lobby"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              Lobby
            </a>
            , which allows us to create and manage global lobbies where players
            can easily find and join matches. Together, these UGS components
            form the backbone of our multiplayer infrastructure, enabling us to
            deliver a seamless and engaging multiplayer experience to our
            players.
          </p>
        </div>

        <div className="media-row">
          <LazyVideo
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/ITRswing.mp4?raw=true"
            hash="LD72Z~MLtRtS*IVrtSo#yXRitRo|"
            poster="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/ITRswing-placeholder.png?raw=true"
            alt="In The Rough"
          />
          <LazyImage
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/ITR3.png?raw=true"
            hash="LsAyAzaKVskDy?aeaJoft,f+jZae"
            alt="In The Rough"
          />
        </div>

        <div className="jumbotron" id="intherough-jumbotron">
          <p className="intherough-text">
            Recognizing how crucial multiplayer is to our game&apos;s
            development, I dove into deployment strategies from the very start.
            One of my very first deployment prototypes was tackling a big
            question: &quot;Can players quickly and effortlessly jump into
            online games with their friends?&quot; To find out, I built a WebGL
            version of our Unity game, set up web socket encryption, and got it
            all running smoothly on a Github Pages site.
          </p>
          <p className="intherough-text">
            After establishing our deployment protocols, I conducted network
            testing under substantial packet loss, elevated ping times, and
            limited bandwidth. The results were promising especially for lobbies
            accommodating 1 to 4 players.
          </p>
          <p className="intherough-text">
            I then began working on a continuous integration/development
            pipeline for our team, ensuring we always had the latest version of
            our game available as a WebGL build. Using the documentation
            provided by{" "}
            <a
              href="https://game.ci/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              Game CI
            </a>
            , I crafted a GitHub Actions workflow. This workflow not only tests
            our game but also initiates the build processes and deploys the
            WebGL build to our designated site. Triggered automatically whenever
            a team member pushes updates to our production branch, this
            streamlined workflow can be up and running in under half an hour. By
            automating this process, we saved countless hours that would have
            otherwise been spent on testing, building, and deploying. This
            automation proved especially invaluable for conducting playtests and
            effortlessly directing players to our most recent playable build.
          </p>
          <p className="intherough-text">
            I continue to work on this project and have been learning so much
            about developing a global multiplayer game. I have faced lots of
            fascinating challenges that helped me grow as a developer. From
            grappling with networked physics issues and client vs server
            authority solutions to ensuring inclusivity for players of all
            abilities, as well as implementing internationalization and
            localization strategies, I have truly enjoyed all the work that our
            team has done so far. I am excited to see where this game goes in
            the future.
          </p>
          <p className="intherough-text">
            To keep up with our progress, check out our{" "}
            <a
              href="https://aguizaro.github.io/GolfSite/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="noreferrer"
            >
              website
            </a>
            .
          </p>
        </div>

        <div className="media-row">
          <LazyVideo
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/Sprint1_VideoMontage.mp4?raw=true"
            hash="L198YEHS0w004LL*_Lo~8wz7sC_J"
            poster="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/Sprint1_VideoMontage-placeholder.png?raw=true"
            alt="Video Montage"
          />
          <LazyVideo
            src="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/CI-DEMO.mp4?raw=true"
            hash="L0264+.8IAof%Nt7oyoeR6xu.8t6"
            poster="https://github.com/aguizaro/TonyGuizar/blob/main/public/img/CI-DEMO-placeholder.png?raw=true"
            alt="CI/CD Demo"
          />
        </div>
      </div>
    </div>
  );
};

export default InTheRough;
