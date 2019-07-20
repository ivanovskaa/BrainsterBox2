import React from 'react';
import '../Links/Links.css';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';


const Links = () => {
    return (
        <Col>
            <ul className="footer-items">
                <li><Link to="./AboutUs">About Us</Link></li>
                <li><Link to="/ContactUs">Contact</Link></li>
                <li><a href="https://www.facebook.com/brainster.co/photos/" target="_blank" rel="noopener noreferrer">Gallery</a></li>
            </ul>
        </Col>
    )
}
export default Links;