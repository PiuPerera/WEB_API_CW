import React, { Component } from "react";
import axios from "axios";


class SIgnIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : "",
      password : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  render(){
    return (
      <div className="col d-flex justify-content-center">
        <div className="card" style={{ width: "45rem" }}>
          <form className="text-center" onSubmit={this.handleSubmit}>
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary" onClick = {this.handleSubmit}>
              Sign in
            </button>
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
  
  async handleSubmit(event){
    event.preventDefault();
    try{
      await axios.post(`http://localhost:5000/api/auth`, {
        email : this.state.email,
        password : this.state.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("isAdmin", res.data.isAdmin);
        localStorage.setItem("userID", res.data.id);
        localStorage.setItem("login", true);
        this.props.history.push("/");
        window.location.reload(false);
      })
    }catch(ex) {
      localStorage.setItem("isAdmin", false);
      alert("Please check the email & password");
    }
  }
}

export default SIgnIn;
