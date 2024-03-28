import { useState } from "react";
import "./header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../utils/theme-color";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState("auto");

  const handleThemeChange = (selectedTheme) => {
    //set theme to device default
    if (selectedTheme === "auto") {
      document
        .getElementsByTagName("html")[0]
        .setAttribute(
          "data-bs-theme",
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"
        );
      localStorage.setItem("theme", selectedTheme);
      return;
    }

    //set theme to selected theme
    setTheme(selectedTheme);
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-bs-theme", selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  };

  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="./" id="title">
            Tony Guizar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="./" className="link">
                Home
              </Nav.Link>
              <Nav.Link href="./#/projects" className="link">
                Projects
              </Nav.Link>
              <Nav.Link href="./#/about" className="link">
                About
              </Nav.Link>
              <Nav.Link href="./#/contact" className="link">
                Contact
              </Nav.Link>
              <NavDropdown
                title="Theme"
                id="theme-dropdown"
                className="basic-dropdown"
                style={{ color: "black" }}
              >
                <NavDropdown.Item
                  onClick={() => handleThemeChange("light")}
                  active={theme === "light"}
                >
                  Light
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleThemeChange("dark")}
                  active={theme === "dark"}
                >
                  Dark
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleThemeChange("auto")}
                  active={theme === "auto"}
                >
                  Auto
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
