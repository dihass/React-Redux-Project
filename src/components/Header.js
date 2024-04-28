import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const logOutHandler = ()=>{
    dispatch(authActions.logout());
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Shopping
            </h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button onClick={logOutHandler}className="logout-btn">logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
