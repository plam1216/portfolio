import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <ul className="nav justify-content-end shadow-sm p-1">
        <li class="nav-item">
          <Link to="/"
            className="nav-link"
          >
            Home
          </Link>
        </li>
        
        <li class="nav-item">
          <Link to="/about"
            className="nav-link"
          >
            About
          </Link>
        </li>
        
        <li class="nav-item">
          <a className="nav-link" href="https://drive.google.com/file/d/1yNqXuHt0wqNJg2ZxDRtYOzJHt8xg2TPh/view?usp=share_link">Resume</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav