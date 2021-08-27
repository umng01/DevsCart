import React, { useState } from "react";
import "./Navbar.css";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogoutState, selectUserName } from "./features/userSlice";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { NavLink } from "react-router-dom";

import { Avatar } from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const Navbar = ({ setIslogin }) => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogoutState());
        setIslogin(null);
        localStorage.setItem("name", "");
      })
      .catch((err) => alert(err.message));
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <nav className="header">
        <div className="title">
          <h2>
            <span className="num">D</span>evsCart{" "}
            <AllInclusiveIcon style={{ fontSize: "35" }} />
          </h2>
        </div>

        <div className="categories">
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            <div>
              <span className="nav_item">Home</span>
            </div>
          </NavLink>
          <a
            href="#categories"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            <div>
              <span className="nav_item">Categories</span>
            </div>{" "}
          </a>

          <NavLink
            to="/accessories"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            <div>
              <span className="nav_item">Accessories</span>
            </div>
          </NavLink>
        </div>

        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search DevsCart" type="text" />
        </div>
        <div className="header__right">
          <div>
            <Button>
              <NavLink
                to="/cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <div>
                  <AddShoppingCartIcon style={{ fontSize: "30px" }} />
                </div>
              </NavLink>
            </Button>

            <Button>
              <NavLink
                to="/orders"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <div>Orders</div>
              </NavLink>
            </Button>
          </div>
          <div>
            <Avatar
              alt="NA"
              src={localStorage.photo}
              onClick={handleClick}
            ></Avatar>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Button
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "black",
                    border: "0.5px solid black",
                    fontWeight: "600",
                  }}
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={handleSignOut}
                >
                  LogOut
                </Button>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
