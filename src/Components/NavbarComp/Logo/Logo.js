import React from 'react';
import '../Logo/Logo.css';
import { Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import logo from '../../imgs/logo.png';

// Brainster Logo -linked to the LandingPage Component
const Logo =()=>{
    return(
        <Row className="LogoNav">
            <Col md={4} className="navbar-logo"><Link to="/"><img src={logo} alt="brainster"/></Link></Col>
        </Row>
    )
}

export default Logo;