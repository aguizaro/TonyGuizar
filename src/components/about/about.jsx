//import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div>
      <div id="about">
        <div className="jumbotron">
          <h1 className="display-4">About Me</h1>
          <p>
            My name is Antonio Guizar Orozco. I am a software developer with a
            passion for creating games and building practical tools. I grew up
            playing lots of video games, most often as a means of spending time
            with friends and family. Even though I have never really been
            skilled at playing games, I was always much more interested in
            learning how they work. I used to go to the public library to use
            the desktop computer and play browser flash games, connect with
            friends online, and discover fun websites. This is when I first
            became aware of the internet and the endless possibilities it
            offered.
          </p>
          <p>
            When I got my first computer, was when I began my programming
            journey by working on fun projects like: hosting minecraft servers
            for my friends, configuring Linux instances on bootable USB flash
            drives for easy plug and play on any PC, deploying Raspberry Pi and
            NAS servers on my local network to learn basic computer networking
            and host cool services like{" "}
            <a
              href="https://pi-hole.net/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Pi-hole
            </a>{" "}
            for blocking Ads,{" "}
            <a
              href="https://httpd.apache.org/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Apache
            </a>{" "}
            for learning web programming, and{" "}
            <a
              href="https://www.plex.tv/personal-media-server/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Plex
            </a>{" "}
            for media storage and streaming.
          </p>
          <p>
            I very much enjoy learning about technology, building cool systems
            and developing useful tools. What really drives me is designing
            interesting solutions for real world problems and building tools
            that people will actually want to use.
          </p>
          <p>
            When applying to university, I knew I wanted to pursue a career in
            which I could work on cool projects. I decided to major in Computer
            Science: Game Design B.S. at UC Santa Cruz because I thought
            building video games would be a great opportunity to develop my
            skills as a programmer, as well as, create things I am proud to
            share with others.
          </p>
          <p>
            I have since worked on a few video game prototypes and vertical
            slices for university courses and developed some web applications
            and tools for personal projects. Currently, I am on a team working
            on a multiplayer golf party game for a university project. I am
            using{" "}
            <a
              href="https://unity.com/solutions/gaming-services"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Unity Gaming Services
            </a>{" "}
            to develop a seamless online party experience that is fun and
            accessible. I am responsible for developing the global online
            network functionality, as well as the deployment of our game on the
            web.
          </p>
          <p>
            For game development, I have mostly used the Unity game engine and
            C# for 3D experiences, as well as JavaScript/TypeScript and{" "}
            <a
              href="https://phaser.io/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Phaser
            </a>
            for browser games. I have simulated board games and built a Chess AI
            using C++ and{" "}
            <a
              href="https://github.com/ocornut/imgui"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              IMGUI
            </a>
            . Using Python, I&apos;ve created AI agents for bi-directional A*
            pathfinding, a procedural level generator using genetic algorithms,
            an npc behavior model using behavior trees, and a hierarchical task
            network planner for crafting in Minecraft.
          </p>
          <p>
            Beyond game development, I have worked with front end tools like{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              React
            </a>
            ,{" "}
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Bootstrap
            </a>{" "}
            and{" "}
            <a
              href="https://vitejs.dev/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Vite
            </a>
            , to create engaging user interfaces. I have also worked with back
            end tools like{" "}
            <a
              href="https://nodejs.org/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Node.js
            </a>
            ,{" "}
            <a
              href="https://expressjs.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Express.js
            </a>
            , and{" "}
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              MongoDB
            </a>
            , as well as,{" "}
            <a
              href="https://flask.palletsprojects.com/en/3.0.x/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              Flask
            </a>{" "}
            and{" "}
            <a
              href="https://www.sqlite.org/"
              target="_blank"
              style={{ textDecoration: "none" }}
              rel="norefer"
            >
              SQLite
            </a>{" "}
            to develop small web applications following RESTful principles,
            manage databases, and handle server side logic.
          </p>
          <p>
            I find joy in creating and expanding my knowledge across different
            technologies. I care a lot about the work that I do, and I am always
            looking for new projects to work on and new technologies to learn.
          </p>
          <p>Thanks for taking the time to read this,</p>
          <p>Tony</p>
        </div>
      </div>
    </div>
  );
};

export default About;
