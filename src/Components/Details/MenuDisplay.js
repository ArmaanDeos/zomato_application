
import React, { Component } from 'react'


class MenuDisplay extends Component {

    orderId = [];

    placeOrder = (id) => {
        this.orderId.push(id);
        this.props.finalOrder(this.orderId);
    }

    removeOrder = (id) => {
        if(this.orderId.indexOf(id) > -1){

            this.orderId.splice(this.orderId.indexOf(id), 1);
        }
        this.props.finalOrder(this.orderId);


    }

    renderCart = (orders) => {
        if(orders){
            return orders.map((item,index) => {
                return(
                    <b key={index}>{item}&nbsp;</b>
                )
            })
        }
    }


    renderMenu = ({menuData}) => {
        if(menuData){
            return(
                menuData.map((item)=>{
                    return(
                        <div key={item._id} >
                        <div className="col-md-6">
                            <b>{item.menu_id}</b>&nbsp;
                            <img src={item.menu_image} alt="menu_image" style={{height:'80px',width:'80px'}} />
                           &nbsp;&nbsp; <h3>{item.menu_name} Rs : {item.menu_price}</h3>
                        </div>
                        <div className="col-md-4">
                        <button className=" btn-success"
                        onClick={() => {this.placeOrder(item.menu_id)}}
                        
                                >
                                    <i className="fa fa-plus"></i>
                                </button> &nbsp;
                                <button className=" btn-danger"
                                onClick={() => {this.removeOrder(item.menu_id)}}
                                >
                                    <i className="fa fa-minus"></i>
                                </button>
                        </div>
                        </div>
                    )
                })
            )
        }
    }

  render() {
    return (
      <div>
        <div className="container">
        <div className="col-md-12 bg-success">
            <h1 style={{textAlign:'center'}}>Recommended For You</h1>
            <h4>Item Number {this.renderCart(this.orderId)}</h4>
            
        
        </div>
        <div className="col-md-12 bg-info">
        {this.renderMenu(this.props)}


        </div>
       
      </div>
     
      </div>
    )
  }
}

export default MenuDisplay;