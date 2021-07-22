import React from "react";
import {Link} from "react-router-dom";
import Search from "./Search";
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
            Product Hunt
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                  Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/postAd">
                  Post Ad
                                </Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav pull-right">
                            <li className="nav-item">
                                <Search />
                            </li>
                            <li className="nav-item">
                                {/* TODO Hide the login button on successfull login */}
                                <Link className="nav-link" to="/login">
                  Log In/Sign Up
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        id="userMenuToggle"
                                    ></button>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="userMenuToggle"
                                    >
                                        
                                        <a className="dropdown-item" href="/a">
                      User {/* TODO show the username here and change a tags to Link tag*/}
                                        </a>
                                        <a className="dropdown-item" href="/c">
                      Log Out
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
