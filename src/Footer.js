import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <>
      <section className="footer">

<div className="box-container">

    <div className="box">
        <h4> <i className="fas fa-shopping-basket"></i> zomato </h4>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, saepe.</p>
        <div className="share">
            <Link to="/" className="fab fa-facebook-f"></Link>
            <Link to="/" className="fab fa-twitter"></Link>
            <Link to="/" className="fab fa-instagram"></Link>
            <Link to="/" className="fab fa-linkedin"></Link>
        </div>
    </div>

    <div className="box">
        <h4>contact info</h4>
        <Link to="/" className="links"> <i className="fas fa-phone"></i> +123-456-7890 </Link>
        <Link to="/" className="links"> <i className="fas fa-phone"></i> +111-222-3333 </Link>
        <Link to="/" className="links"> <i className="fas fa-envelope"></i> arman@gmail.com </Link>
        <Link to="/" className="links"> <i className="fas fa-map-marker-alt"></i> New Delhi, India - 110025 </Link>
    </div>

    <div className="box">
        <h4>quick links</h4>
        <Link to="/" className="links"> <i className="fas fa-arrow-right"></i> home </Link>
        <Link to="/" className="links"> <i className="fas fa-arrow-right"></i> features </Link>
        <Link to="/" className="links"> <i className="fas fa-arrow-right"></i> products </Link>
        <Link to="/" className="links"> <i className="fas fa-arrow-right"></i> categories </Link>
        <Link to="/" className="links"> <i className="fas fa-arrow-right"></i> review </Link>
        <Link to="/" className="links"> <i className="fas fa-arrow-right"></i> blogs </Link>
    </div>

    <div className="box">
        <h4>newsletter</h4>
        <p>subscribe for latest updates</p>
        <input type="email" placeholder="your email" className="email"/>
        <input type="submit" value="subscribe" className="btn"/>
        <img src="image/payment.png" className="payment-img" alt=""/>
    </div>

</div>

<div className="credit"> created by <span> armaanDeveloper </span> | all rights reserved </div>

</section>

    </>
  )
}

export default Footer;
