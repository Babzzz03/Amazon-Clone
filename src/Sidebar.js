import React,  { useState } from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css"

function Sidebar({isOpen, toggle}) {
   
  return (
    <aside
      isOpen={isOpen}
      onClick={toggle}
      className={isOpen ? "sidebar__container active" : "sidebar__container"}
    >
      <div className="icon" onClick={toggle}>
        <div className="close__icon">
          <i class="fa fa-times" aria-hidden="true"></i>
        </div>
      </div>
      <div className="sidebar__wrapper">
        <ul className="sidebar__menu">
          <Link to="/" className="sidebar__links" onClick={toggle}>
            <i class="fa fa-home" aria-hidden="true"></i> Home
          </Link>
          <Link to="/orders" className="sidebar__links" onClick={toggle}>
            Returns & orders
          </Link>
          <Link to="/checkout" className="sidebar__links" onClick={toggle}>
            <i class="fa fa-shopping-cart" aria-hidden="true"></i> Carts
          </Link>
          <Link to="/login" className="sidebar__links" onClick={toggle}>
            Sign Up
          </Link>
        </ul>
        <div className="sidebtn__wrap">
          <Link to="/login" className="sidebar__route">
            Sign in
          </Link>
        </div>


          <div className="social__icon">
                <a
                  className="social__icon__link"
                  href="http://"
                  target="_blank"
                  aria-label="whatsapp"
                >
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </a>
                <a
                  className="social__icon__link"
                  href="http://"
                  target="_blank"
                  aria-label="instagram"
                >
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  className="social__icon__link"
                  href="http://"
                  target="_blank"
                  aria-label="twitter"
                >
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a
                  className="social__icon__link"
                  href="http://"
                  target="_blank"
                  aria-label="facebook"
                >
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </div>


              
      </div>
    </aside>
  );
}

export default Sidebar