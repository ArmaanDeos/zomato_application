import React, { Component } from 'react';
import axios from 'axios';
import './Listing.css';
import ListingDisplay from './ListingDisplay'
import CuisineFilter from '../Filters/CuisineFilter';
import CostFilter from '../Filters/CostFilter';
import Header from '../../Header';


const Url = "https://febzomatoapi.herokuapp.com/restaurant";

class Listing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurants: '',
        }
    }

    

    setDataPerFilter = (data) => {
        this.setState({restaurants:data})
    }

    render() {
        return (
            <>
            <Header/>
            <div className="row">
                <div id="mainListing">
                    <div id="filter">
                        <center>
                            <h3>Filters</h3>
                        </center>
                        <hr />
                        <CuisineFilter mealId={this.props.match.params.id} restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                        <CostFilter restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                    </div>
                <ListingDisplay listData={this.state.restaurants}/>
                
                </div>
            </div>
            </>
        )
    }
    // api calling using axios componentDidMount() axios component.
    componentDidMount(){
        let mealId= this.props.match.params.id ? this.props.match.params.id:1;
        sessionStorage.setItem('mealId',mealId);
        axios.get(`${Url}?&mealId=${mealId}`)
        .then((res)=> {
            this.setState({
                restaurants:res.data
            })
        })
    }
}

export default Listing;
