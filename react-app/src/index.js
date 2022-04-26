import React from "react";
//import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
//import Cat from "./Components/catCard"
import AdminCat from './Components/admin/cats'
import { render } from "@testing-library/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./Components/navBar"
import SignIn from  "./Components/signin"
import SignUp from  "./Components/signup"
import About from "./Components/about"
import Cats from "./Components/cats";
import CatView from "./Components/CatView";

//ReactDOM.render(<Cat/>, document.getElementById("root"));

render(
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route exact path = "/" element={<Cats/>}/>
            <Route exact path = "/signin" element={<SignIn/>}/>
            <Route exact path = "/signup" element={<SignUp/>}/>
            <Route exact path = "/about" element={<About/>}/>
            <Route exact path = "/admin" element={<AdminCat />}/>
            <Route exact path = "/view" element={<CatView />}/>
        </Routes> 
    </BrowserRouter>
    , document.getElementById("root")
)