import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component{
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div>
                            <a className="navbar-brand" style={{paddingLeft: "10px"}}>
                                <img 
                                    style={{paddingLeft: "10px", paddingRight: "5px"}} 
                                    src="https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_026_cat_black_witch_halloween-512.png" width="45" height="30" className="d-inline-block align-top" 
                                    alt=""
                                />
                                    CattyLove
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/admin" className="nav-link">
                                        Home
                                    </Link>
                                </li> 
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <Link to="/signin" className="nav-link">
                                    Sign In
                                </Link>
                                <br />
                                <br />
                                <Link to="/signup" className="nav-link">
                                    Sign Up
                                </Link>
                            </form>
                        </div>
                    </div>
                </nav>
                <br/>
            </React.Fragment>
        );
    }
}

export default NavBar;