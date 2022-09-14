import React from 'react';
import {Link } from 'react-router-dom';


const ListingDisplay = (props) => {

    const renderData = ({listData}) =>{
        if(listData){
            if(listData.length>0){
               return listData.map((item) => {
                return(

                    <div className="item" key={item.restaurant_id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={item.restaurant_thumb} className="Image img-fluid"
                                    alt={item.restaurant_name}/>
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details?restId=${item.restaurant_id}`}>
                                            {item.restaurant_name}
                                        </Link>
                                        <div className="city_name">{item.address}</div>
                                        <div className="city_name">{item.rating_text}</div>
                                        <div className="city_name">Rs. {item.cost}</div>
                                        <div className="labelDiv">
                                            <span className="btn label-primary">
                                                {item.mealTypes[0].mealtype_name}
                                            </span> &nbsp;
                                            <span className="btn label-success">
                                                {item.mealTypes[1].mealtype_name}
                                            </span>
                                        </div>
                                        <div className="labelDiv">
                                            <span className="btn label-info">
                                                {item.cuisines[0].cuisine_name}
                                            </span> &nbsp;
                                            <span className="btn label-danger">
                                                {item.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                )
               })

            }else{
                return(
                    <div>
                        <center><h2>No Data is Available for Filter</h2></center>
                    </div>
                )
            }
        }else{
            return(
                <div>
                    <img src="/image/loader.gif" alt="loader"/>
                </div>
            )
        }
    }
  return (
    <div>
      
        <section className="features" id="content">
    {renderData(props)}
                
            </section>
     
    </div>
  )
}

export default ListingDisplay;
