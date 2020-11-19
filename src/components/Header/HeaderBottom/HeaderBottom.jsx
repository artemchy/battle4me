import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderBottom.scss";
import logo from "../../../assets/logo.svg";
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { SearchForm } from "./SearchForm/SeachForm";

export const HeaderBottom = () => {
  const [isShow, setShowSearchForm] = useState(false);
  const [scroll, setSctroll] = useState(false);

  const checkScrollTop = () => {
    if (!scroll && window.pageYOffset > 400) {
      setSctroll(true);
    } else if (!scroll && window.pageYOffset <= 400) {
      setSctroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  const showSearch = () => setShowSearchForm(true);

  return (
    <div className={"header-bottom"}>
      <div className="container">
        <div className={"header-bottom__wrapper"}>
          <div className={"header-bottom__logo"}>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <nav className={"header-bottom__nav"}>
            <ul className={`header-bottom__${scroll ? "body hide" : "body"}  `}>
              <li>
                {isShow ? (
                  <SearchForm showSearch={setShowSearchForm} />
                ) : (
                  <div className={"header-bottom__search"} onClick={showSearch}>
                    <FiSearch size={20} />
                  </div>
                )}
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contacts">Contact Us</Link>
              </li>
              <li>
                <div>
                  <BsBell size={24} />
                </div>
                <span className="divider" />
                <span>
                  <Link
                    to="/login"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <AiOutlineUser size={24} />
                    <span style={{ marginLeft: "6px" }}>Sign In</span>
                  </Link>
                </span>
              </li>
            </ul>
            <button className="btn__style1">Battle</button>
          </nav>
        </div>
      </div>
    </div>
  );
};
