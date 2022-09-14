import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item)=> {
                return (
                    <Link to={`/Listing/${item.mealtype_id}`} key={item._id}>

                <div className="box-container">
                    

                <div className="box">
                    <img src={item.meal_image} alt={item.mealType}/>
                    <h3>{item.mealtype}</h3>
                    <p>{item.content}</p>
                    <Link to={`/Listing/${item.mealtype_id}`}key={item._id} className="btn">Order Now</Link>
                </div>
                </div> 

                    </Link>
                )
            })
        }
    }
  return (
    <>

        <section className="features" id="features">
            {listMeal(props)}
        </section>
        

      
    </>
  )
}

export default QuickDisplay;

