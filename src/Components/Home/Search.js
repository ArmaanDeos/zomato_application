import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import './Search.css';


const url = "https://febzomatoapi.herokuapp.com/location";
const restUrl = "https://febzomatoapi.herokuapp.com/restaurant";
// const url = 'https://zomatoajulypi.herokuapp.com/location';
class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            restaurants:''
        }
    }


    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return (
                    <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
                )
            })
        }
    }

    handleCity = (event) => {
        let stateId = event.target.value;
        console.log(stateId)
        fetch(`${restUrl}?stateId=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }

    handleRest = (event) => {
        const restId = event.target.value;
        this.props.history.push(`/details?restId=${restId}`);
    }

    render() {
        return (
            <div>

                <div>
                    <section className="home" id="search">
                        <div id="heading" className='content'>
                            <h3>fresh and <span>organic</span> food for you Order Now!</h3>
                            <div className="dropdown btn-group">
                                <select className='btn' onChange={this.handleCity}>
                                    <option>----Select Your City----</option>
                                    {this.renderCity(this.state.location)}
                                </select>
                            </div>

                            <div className="dropdown btn-group">
                                <select className='btn' onChange={this.handleRest}>
                                    <option>----Select Your Restaurants----</option>
                                    {this.renderRest(this.state.restaurants)}
                                </select>
                                    
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }

    //api calling on page load
   componentDidMount() {
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Search);





