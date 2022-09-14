import React, { Component } from 'react'
import './PlaceOrder.css';
import Header from '../../Header';

const url = " https://febzomatoapi.herokuapp.com/menuItem";
const purl = "https://febzomatoapi.herokuapp.com/placeOrder";

class PlaceOrder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: Math.floor(Math.random() * 10000),
      hotel_name: this.props.match.params.restName,
      name: sessionStorage.getItem('userinfo') ? sessionStorage.getItem('userinfo').split(',')[0] : '',
      email: sessionStorage.getItem('userinfo') ? sessionStorage.getItem('userinfo').split(',')[1] : '',
      cost: 0,
      phone: sessionStorage.getItem('userinfo') ? sessionStorage.getItem('userinfo').split(',')[2] : '',
      address: ' Hno 34, New Delhi',
      menuItem: ''

    }
  }

  renderItem = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div className="container" >
            <div className='orderItem' key={item.menu_id}>
              <img src={item.menu_image} alt={item.menu_name} />
              <h3>{item.menu_name}</h3>
              <h4>Rs. {item.menu_price}</h4>
            </div>
          </div>
        )
      })
    }
  }


  checkout = () => {
    let obj = this.state;
    obj.menuItem = sessionStorage.getItem('menu');
    fetch(purl, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {

    // authorization user login (if login then only redirect to placeOrder)
    if (!sessionStorage.getItem('loginStatus')) {
      return (
        <div style={{ marginTop: '100px', height: '30vh' }}>
          <Header />
          <center>
            <h2 style={{ fontSize: '3rem', color: 'var(--orange)', fontWeight: '700' }}>Login First To placeOrder</h2>
          </center>
        </div>
      )
    }

    return (
      <>
        <Header />
        <div className="container " >
                <form action='https://paytmmypaymentgateway.herokuapp.com/paynow' method='POST'>
           <div className="accordion" id="FormContainer">
            <div className="accordion-item"> 
              <h1 className="accordion-header" id="headingOne">
                Your Order For {this.state.hotel_name}
              </h1>


              <div className="accordion-body row my-5 m-5">

                  <input type="hidden" name="cost" value={this.state.cost}/>
                  <input type="hidden" name="id" value={this.state.id}/>
                  <input type="hidden" name="hotel_name" value={this.state.hotel_name}/>

                  <div className="form-group col-md-6">
                    <label htmlFor="fname">Name</label>
                    <input id="fname" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} />

                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="fname">Email</label>
                    <input id="email" className="form-control" name="email" value={this.state.email} onChange={this.handleChange} />

                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} />

                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="address">Address</label>
                    <input id="address" className="form-control" name="address" value={this.state.address} onChange={this.handleChange} />

                  </div>
              </div>
              <div className="col-md-12">
              <button className="btn" onClick={this.checkout} type="submit">Place Order </button>
                </div>
              <div className='row'>
                  <h2>TotalPrice is Rs. {this.state.cost}</h2>
              {this.renderItem(this.state.menuItem)}
               
              </div>
            
              
            </div>
          
          </div> 
                </form>
        </div>

      </>

    )
  }

  // api calling
  componentDidMount() {
    let menuItem = sessionStorage.getItem('menu');
    let orderId = [];
    menuItem.split(',').map((item,) => {
      orderId.push(parseInt(item));
      return 'ok'
    })

    fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderId)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let totalPrice = 0;
        data.map((item) => {
          totalPrice = totalPrice + parseFloat(item.menu_price);
          return 'ok'
        })
        this.setState({ menuItem: data, cost: totalPrice });
      })
  }

}

export default PlaceOrder;
