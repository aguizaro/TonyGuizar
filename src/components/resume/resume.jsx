import "./resume.css";
const Resume = () => {
  return (
    <div id="resume">
      <div className="container" id="resume-body">
        <div className="resume-content">
          <div className="resume-section">
            <div className="resume-header">
              <h2>Education</h2>
            </div>
            <div className="resume-item">
              <h5>Bachelor of Science - Computer Science</h5>
              <p className="text-muted">
                University of California, Santa Cruz | Sep 2018 - Apr 2021
              </p>
              <ul>
                <li>
                  <strong>Dean&apos;s Honors:</strong> Sep 2022 - Jun 2024
                </li>
                <li>
                  <strong>Best Technical Achievement:</strong> Awarded to Golf
                  Bash: Online, 2024 UCSC Game Awards
                </li>
              </ul>
            </div>
            
            <hr className="resume-divider" />

            <div className="resume-header">
              <h2>Skills</h2>
            </div>
            <div className="resume-item">
              <ul>
                <li>
                  <strong>Programming Languages:</strong> Python, JavaScript,
                  TypeScript, HTML, CSS, C++, C#
                </li>
                <li>
                  <strong>Technologies:</strong> Node.js, React.js, Bootstrap,
                  Flask, MongoDB, Linux, Unix, CI/CD, Unity 3D
                </li>
              </ul>
            </div>

            <hr className="resume-divider" />

            <div className="resume-header">
              <h2>Experience</h2>
            </div>
            <div className="resume-item">
              <h5>Baskin School of Engineering</h5>
              <p className="text-muted">
                Team Member, Grader | Jan 2024 - Apr 2024
              </p>
              <ul>
                <li>
                  Engineered detailed <strong>unit tests</strong> to evaluate
                  student <strong>AI project</strong> solutions, cutting down
                  manual review time by 60%.
                </li>
                <li>
                  Spearheaded <strong>automation</strong> efforts by crafting
                  Python scripts to streamline the grading process for over 200
                  student projects.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h5>Cruzio Internet</h5>
              <p className="text-muted">
                Crew Chief of Field Operations | Feb 2019 - Sep 2022
              </p>
              <ul>
                <li>
                  Lead a team of <strong>9 network technicians</strong> on daily
                  wireless, fiber, and telecom installations across Santa Cruz
                  County.
                </li>
                <li>
                  Coordinated the efficient execution of a{" "}
                  <strong>150-unit</strong> residential installation project,
                  optimizing operations and leading a team of 10 to successful
                  completion in less than 3 months.
                </li>
              </ul>
            </div>

            <hr className="resume-divider" />

            <div className="resume-header">
              <h2>Notable Projects</h2>
            </div>
            <div className="resume-item">
              <h5>Golf Bash: Online</h5>
              <p className="text-muted">
                Lead Programmer, Network and Deployment | Jan 2024 - Present
              </p>
              <ul>
                <li>
                  Engineered a seamless{" "}
                  <strong>global multiplayer experience</strong> for a 3D
                  physics-based golf party game.
                </li>
                <li>
                  Developed a <strong>robust multiplayer framework</strong>{" "}
                  enabling low-latency, player-to-player interactions.
                </li>
                <li>
                  Reduced deployment time by <strong>80%</strong> by
                  implementing a <strong>CI/CD pipeline</strong> using GitHub
                  Actions.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h5>FutPlanner</h5>
              <p className="text-muted">
                Full Stack Developer | Dec 2023 - Jan 2024
              </p>
              <ul>
                <li>
                  Enabled users to search and browse over{" "}
                  <strong>5,900 football clubs</strong> and create a
                  personalized match planner.
                </li>
                <li>
                  Leveraged <strong>Google Calendar API</strong> and OAuth2 to
                  create up to 160 unique calendar events per request.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h5>Satirical Article Generator</h5>
              <p className="text-muted">
                Full Stack Developer | Jan 2024 - Feb 2024
              </p>
              <ul>
                <li>
                  Utilized <strong>NewsAPI</strong> and <strong>OpenAI</strong>{" "}
                  to craft humorous, satirical versions of the latest articles.
                </li>
                <li>
                  Generated over <strong>500 articles</strong>, each with a
                  unique seed for easy sharing and replication.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h5>AI Personalized Interactive Fiction</h5>
              <p className="text-muted">
                Researcher, Programmer | Jul 2023 - Aug 2023
              </p>
              <ul>
                <li>
                  Developed text-to-sound models for an{" "}
                  <strong>AI-driven interactive fiction prototype</strong>{" "}
                  engaging young children in personalized storytelling
                  experiences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
