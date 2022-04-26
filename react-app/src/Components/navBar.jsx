import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component{
    render() {
        if ("kushani@gmail.com" === localStorage.getItem("email")) {
            return (
                <React.Fragment>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div>
                            <a href="/" className="navbar-brand" style={{paddingLeft: "10px"}}>
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
                                        Cat Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button type="button" className="btn btn-danger" onClick = {this.logout}>
                                    Sign Out
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
                <br/>
                </React.Fragment>
            );
        }    else
        if ("true" === localStorage.getItem("login")) {
            return (
                <React.Fragment>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div>
                            <a href="/" className="navbar-brand" style={{paddingLeft: "10px"}}>
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
                                        Admin
                                    </Link>
                                </li> 
                                <li className="nav-item">
                                    <Link to="/admin" className="nav-link">
                                        Cat Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button type="button" className="btn btn-danger" onClick = {this.logout}>
                                    Sign Out
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
                <br/>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <div>
                            <a href="/" className="navbar-brand" style={{paddingLeft: "10px"}}>
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
                                    <Link to="/" className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                        Cats
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
            )    
        }
    }

    logout = () => {
        localStorage.clear();
        window.location.reload(false);
    }
}

export default NavBar;