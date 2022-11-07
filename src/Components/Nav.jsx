import React from 'react'
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav>
      <ul className="nav justify-content-end shadow-sm p-1">
        <li className="nav-item">
          <Link
            className="nav-link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="https://drive.google.com/file/d/1yNqXuHt0wqNJg2ZxDRtYOzJHt8xg2TPh/view?usp=share_link">Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav