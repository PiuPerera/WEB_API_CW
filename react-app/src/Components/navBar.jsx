import React, { Component } from "react";

class NavBar extends Component{
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#" style={{paddingLeft: "10px"}}>
                        <img style={{paddingLeft: "10px", paddingRight: "5px"}} src="https://cdn3.iconfinder.com/data/icons/materia-flat-halloween-free/24/039_026_cat_black_witch_halloween-512.png" width="45" height="30" class="d-inline-block align-top" alt=""></img>
                        CattyLove</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">About <span class="sr-only"></span></a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;