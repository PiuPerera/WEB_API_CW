import React from "react";
//import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Cat from "./Components/catCard"
import AdminCat from './Components/admin/cats'
import { render } from "@testing-library/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";


//ReactDOM.render(<Cat/>, document.getElementById("root"));

render(
    <BrowserRouter>
        <Routes>
            <Route exact path = "/" element={<AdminCat/>}/>
        </Routes>
    </BrowserRouter>
    , document.getElementById("root")
)