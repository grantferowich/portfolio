import { Link } from 'react-router-dom';
import React from 'react'

export default function Navigation() {
  return (
    <div>
       <nav>
      <ul>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}
