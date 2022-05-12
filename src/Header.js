import React, { useState, useEffect } from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search"
import  {Link} from "react-router-dom"
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";




function Header({ toggle }) {





  

  const handleAutentication = () => {

if (user) {
  auth.signOut();
}


  }
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className="header">
      <div className="mobile__icon" onClick={toggle}>
        <i class="fa fa-bars" aria-hidden="true"></i>
      </div>
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="mobile__menu">
        <div className="header__nav">
          <Link to={!user && "/login"} className="link__style">
            <div
              onClick={handleAutentication}
              className="header__option visible"
            >
              <span className="header__optionLineOne user__name">
                <i class="fa fa-user" aria-hidden="true"></i> Hello{" "}
                {!user ? "Guest" : user?.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders" className="link__style">
            <div className="header__option hidden">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/checkout" className="link__style">
            <div className="header__option hidden">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLineTwo">Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="link__style">
            <div className="header__optionBasket visible">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
