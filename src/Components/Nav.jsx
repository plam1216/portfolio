import React from 'react'
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav>
      <ul className="nav justify-content-end shadow-sm p-1">
        <li class="nav-item">
          <Link
            to="home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="aboutme"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            About Me
          </Link>
        </li>
        <li class="nav-item">
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav