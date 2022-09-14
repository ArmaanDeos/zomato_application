import React, { Component } from 'react';
import axios from 'axios';
import './Filter.css'

const url = "https://febzomatoapi.herokuapp.com/filter"

class CuisineFilter extends Component{

    filterCuisine = (event) => {
        let mealId = this.props.mealId;
        let cuisineId = event.target.value;
        let cuisineUrl;
        if(cuisineId === ""){
            cuisineUrl = `${url}/${mealId}`;
        }else{
            cuisineId = `${url}/${mealId}?cuisine=${cuisineId}`;
        }

        axios.get(cuisineUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})
    }

    render(){
        return(
            <>
            <div className="FilterBox row" style={{marginLeft:'15%'}} onChange={this.filterCuisine}>
                <h4>  Cuisine Filter </h4>
                <label className='radio'>
                    <input type="radio" value="" name="cuisine"/>All
                </label>
                <label className='radio'>
                    <input type="radio" value="1" name="cuisine"/>North Indian
                </label>
                <label className='radio'>
                    <input type="radio" value="2" name="cuisine"/>South Indian
                </label>
                <label className='radio'>
                    <input type="radio" value="3" name="cuisine"/>Chinese
                </label>
                <label className='radio'>
                    <input type="radio" value="4" name="cuisine"/>Fast Food
                </label>
                <label className='radio'>
                    <input type="radio" value="5" name="cuisine"/>Street Food
                </label>
            </div>
            </>
        )
    }
}

export default CuisineFilter;