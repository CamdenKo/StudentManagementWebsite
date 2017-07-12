import React, { Component } from 'react';


export default function Navbar(){
  return(
    <nav>
      <div className = 'nav-wrapper container'>
        <a className = 'brand-logo left '>Better Fullstack</a>
        <ul id = 'nav-mobile' className = 'right'>
          <li><a>Students</a></li>
          <li><a>Campuses</a></li>
        </ul>
      </div>
    </nav>
  )
}
