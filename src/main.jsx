import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/about.jsx";
import Projects from "./components/projects/projects.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";
import Futplanner from "./components/futplanner/futplanner.jsx";
import InTheRough from "./components/intherough/intherough.jsx";
import stickerPAD from "./components/stickerpad/stickerpad.jsx";
import Chinatown from "./components/chinatown/chinatown.jsx";
import ArticleGen from "./components/ArticleGen/ArticleGen.jsx";
import ProdTimer from "./components/prodtimer/prodtimer.jsx";
import MazeGen from "./components/mazegen/mazegen.jsx";
import lilghost from "./components/lilghost/lilghost.jsx";
import Resume from "./components/resume/resume.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/projects" Component={Projects} />
        <Route path="/about" Component={About} />
        <Route path="/resume" Component={Resume} />
        <Route path="/contact" Component={Contact} />
        <Route path="/intherough" Component={InTheRough} />
        <Route path="/futplanner" Component={Futplanner} />
        <Route path="/articlegen" Component={ArticleGen} />
        <Route path="/chinatown" Component={Chinatown} />
        <Route path="/stickerpad" Component={stickerPAD} />
        <Route path="/prodtimer" Component={ProdTimer} />
        <Route path="/mazegen" Component={MazeGen} />
        <Route path="/lilghost" Component={lilghost} />
      </Routes>
      <Footer />
    </HashRouter>
  </React.StrictMode>
);
