import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Footer';
import Listing from './Components/Listing/Listing';
import RestDetails from './Components/Details/RestDetails';
import PlaceOrder from './Components/Booking/PlaceOrder';
import ViewOrder from './Components/Booking/ViewOrder';
import Login from './Components/Login/Login'
import Register from './Components/Login/Register'






const Routing = () => {
    return (
        <>
            <BrowserRouter>
                
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Listing/:id" component={Listing} />
                    <Route exact path="/Details" component={RestDetails} />
                    <Route exact path="/PlaceOrder/:restName" component={PlaceOrder} />
                    <Route exact path="/viewBooking" component={ViewOrder} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>


                <Footer />

            </BrowserRouter>
          


        </>


    )
}
export default Routing;