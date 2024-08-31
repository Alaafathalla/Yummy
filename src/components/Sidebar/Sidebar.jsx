import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Sidebar/sideBar.module.css';

export default function SidebarNav() { 
  return (
    <div className= { ` bg-black  ${style.sidebar}`}>
      <ul className="nav justify-content-end bg-black text-white flex-column">
        <li className="nav-item">
          <NavLink className={`nav-link text-white ${style.link}`} to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link text-white ${style.link}`} to="/categories">Categories</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link text-white ${style.link}`} to="/search">Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link text-white ${style.link}`} to="/ingredients">Ingredients</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link text-white ${style.link}`} to="/area">Area</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={`nav-link text-white ${style.link}`} to="/contact">Contact Us</NavLink>
        </li>
      </ul>  

      <div className="footer">
        <div className="icons px-3">
          <i className="fa-brands fa-facebook text-white m-1"></i>
          <i className="fa-brands fa-twitter text-white m-1"></i>
          <i className="fa-solid fa-globe text-white m-1"></i>
        </div> 
        <div>
          <p className='text-white px-3'>Copyright Yummy© 2024 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}




