import React, { Component, Fragment } from 'react'
import './Header.css';
import {Link, withRouter} from 'react-router-dom';


const url = "https://authapizomato.herokuapp.com/api/auth/userInfo"

export class Header extends Component {

    constructor(){
        super()
        
        this.state = {
            userData:'',
        }
    }


    handleLogout = () => {
        sessionStorage.removeItem('userinfo');
        sessionStorage.setItem('loginStatus',false);
        sessionStorage.removeItem('ltk');
        this.props.history.push('/');
    }

    conditionalHeader = () => {

        if(sessionStorage.getItem('ltk')){
            let data = this.state.userData;
            let outArray = [data.name, data.email,data.phone, data.role];
            sessionStorage.setItem('userinfo', outArray);
            sessionStorage.setItem('loginStatus', true);

            return(
                <>
                <div className="btnLogin">
                    <Link to='/' className='btnL'>
                    <span><i className="fa fa-user" id="userIcon"> {data.name}</i></span></Link>
                    
                </div>
                <div>
                <button onClick={this.handleLogout} className="btnLog logBtn">Logout</button>
                </div>

               
                </>
            )
        }
        return(
            <>
              <Link to="/register" className="fas fa-user-plus" id="register-btn" style={{textDecoration:'none'}}></Link>
                <Link to="/login" className="fas fa-user" id="login-btn"></Link>
            </>
        )
    }

    render() {
        return (
            <Fragment>
                <header className="header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                        <div className="container-fluid header">
                            <a className="navbar-brand Logo" href="/"><i className="fas fa-shopping-basket"></i> Zomato</a>
                            
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Features</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Categories</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Menu</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Review</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Blogs</a>
                                    </li>
                                </ul>

                            <div className="userInfo">
                                {this.conditionalHeader()}
                                {/* <div className="fas fa-user" id="login-btn"></div>
                                <div className="fas fa-user-plus" id="register-btn"></div> */}
                            
                            </div>
                            </div>
                        </div>
                    </nav>
                </header>

            </Fragment>
        )
    }

    //get userinfo after login
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token': sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}

export default withRouter(Header);