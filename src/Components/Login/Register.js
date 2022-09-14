import React, { Component } from 'react';
import Header from '../../Header';
import './Register.css'

const url = "https://authapizomato.herokuapp.com/api/auth/register";

class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            phone: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = () => {
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(this.props.history.push('/login'))
    }
    render() {
        return (
            <>
                <Header />
                <div className="container" id="RegisterBox">
                    <h2>Register Here</h2>

                    <div className="form-group mb-3">
                        <label htmlFor="fname" className="form-label">Name</label>
                        <input id="email" name="name" className="form-control"
                            value={this.state.name} onChange={this.handleChange} placeholder="Enter Your Name" required />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange} placeholder="Enter Your Email" required/>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input id="password" name="password" className="form-control"
                                value={this.state.password} onChange={this.handleChange} placeholder="Enter Your Password"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input id="phone" name="phone" className="form-control"
                                value={this.state.phone} onChange={this.handleChange} placeholder="Enter Your Phone"/>
                    </div>

                    <button className="btn" id="btn" onClick={this.handleSubmit}>Register Now!</button>

                </div>
            </>
        )
    }
}

export default Register;