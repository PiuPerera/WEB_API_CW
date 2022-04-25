import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        email: "",
        password: "",
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
      return (
        <div className="col d-flex justify-content-center">
          <div className="card" style={{ width: "45rem" }}>
            <form className="row g-3" onSubmit={this.handleSubmit}>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Enter Your Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>
              <div className="text-center">
                <Link to="/signin" className="nav-link">
                  Alredy Have an Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      );
    }
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    }
  
    async handleSubmit(event) {
      event.preventDefault();
      try {
        const { data } = await axios.post(`api/users`, {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
        });
        localStorage.setItem("isAdmin", false);
        localStorage.setItem("login", true);
        alert("Sign Up Successfully..!");
        this.props.history.push("/");
      }
      catch {
        alert("Please make sure to enter correct details");
      }
    }
  }
  export default SignUp;
  