import React, { Component } from "react";

import Header from "../../Header";
import "./Register.css";

const url = "https://authapizomato.herokuapp.com/api/auth/login";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      message: ""
      // authCheck: false,
      // authResult: false,
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    this.setState({ authCheck: true });
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.auth === false) {
          // this.setState({ message: "Login Successful", authResult: true });
          this.setState({message:data.token})
        } else {
          // this.setState({ message: "Login Failed", authResult: false });
          
          sessionStorage.setItem("ltk", data.token);
          this.props.history.push("/");
        }
      });
    // console.log(this.state);
  };

  render() {

 

    return (
      <>
        <Header />
        <div className="container" id="RegisterBox">
          <h2>Login</h2>
          <h4 style={{color: 'red'}}>{this.state.message}</h4>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="form-control"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Enter Your Email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              name="password"
              className="form-control"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button className="btn" id="btn" onClick={this.handleSubmit}>
            Login
          </button>
        </div>
      </>
    );
  }
}

export default Login;
