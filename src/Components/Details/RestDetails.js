import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Detail.css';
import MenuDisplay from './MenuDisplay';
import Header from '../../Header';

const Url = " https://febzomatoapi.herokuapp.com";

class RestDetails extends Component {

    constructor() {
        super();

        this.state = {
            details: '',
            menuList: '',
            userItem: '',
            mealId: sessionStorage.getItem('mealId') ? sessionStorage.getItem('mealId') : '1'
        }
    }

    addToCart = (data) => {
        this.setState({userItem:data})
    }

  
    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render() {

        let details = this.state.details;

        return (
            <>
                <Header/>

                <section className="detailContainer" id="features">
                    <div className="box-container">

                        <div className="box">
                            <div className="imgDiv">
                                <img src={details.restaurant_thumb} alt="restaurant_thumb" />
                            </div>
                            <div className="details">
                                <h3>{details.restaurant_name}</h3>
                                <p style={{ fontSize: '10px', lineHeight: '1', color: 'black' }}>Customer Review : {details.average_rating} , {details.rating_text}</p>
                                <p>Address : {details.address}</p>

                                <p style={{ textDecoration: 'line-through' }}><del> Old Price : 1000 </del></p>
                                <p> Price : {details.cost}</p>

                                <div className="feature_container">
                                    <div className="feature">
                                        <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="veg" className="imgIcon" />
                                        <p style={{ fontSize: '12px', lineHeight: 0.2, color: 'orange' }}>Pure Veg</p>
                                    </div>
                                    <div className="feature">
                                        <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt="veg" className="imgIcon" />
                                        <p style={{ fontSize: '12px', lineHeight: 0.2, color: 'orange' }}>Fully Senatized</p>
                                    </div>
                                    <div className="feature">
                                        <img src="https://i.ibb.co/kHrm3Mh/delivery.png" alt="veg" className="imgIcon" />
                                        <p style={{ fontSize: '12px', lineHeight: 0.2, color: 'orange' }}>Free Delivery</p>
                                    </div>
                                </div>
                                <div>
                                <Link to="/" className="btn">Back</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button  className="btn" onClick={this.proceed}>CheckOut</button>
                                </div>
                           

                            </div>
                        </div>
                    </div>
                </section>

                <div className="col-md-12">
                    <MenuDisplay menuData={this.state.menuList} finalOrder={(data)=> {this.addToCart(data)}}/>
                </div>


            </>
        )
    }

    // api calling with axios using async and await
    async componentDidMount() {
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${Url}/details/${restId}`)
        console.log(">>>>>", response.data)
        let menu = await axios.get(`${Url}/menu/${restId}`)
        this.setState({ details: response.data[0], menuList: menu.data })
    }
}

export default RestDetails
