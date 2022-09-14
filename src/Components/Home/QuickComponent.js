import React, { Component } from 'react'
import QuickDisplay from './QuickDisplay';
import './QuickComponent.css';

const Url = 'https://febzomatoapi.herokuapp.com/mealType';

 class QuickComponent extends Component {

    constructor(){
        super();
        this.state={
            mealType:'',
        }
    }
  render() {
    return (
      <>
        
            <section className="features" id="features">
            <h1 className="heading"> Quick <span>Search</span> </h1>
            <p style={{textAlign: 'center',fontSize:'2rem',fontWeight:'200'}}>Discover Restaurants By Meal...</p>
            
            <QuickDisplay mealData={this.state.mealType}/>
            </section>

      </>
    )
  }

  //api calling
  componentDidMount(){
    fetch(Url,{method:'GET'})
    .then((res)=> res.json())
    .then((data)=>{
        this.setState({mealType:data})
        console.log(data)
    })
  }
}

export default QuickComponent;
