import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar(){
  return(
    <nav className = 'firstColor'>
      <div className = 'nav-wrapper container firstColor'>
        <Link className = 'brand-logo left' to = '/campuses'>Better Fullstack</Link>
        <ul id = 'nav-mobile' className = 'right'>
          <li><Link to = '/students'>Students</Link></li>
          <li><Link to = '/campuses'>Campuses</Link></li>
        </ul>
      </div>
    </nav>
  )
}

