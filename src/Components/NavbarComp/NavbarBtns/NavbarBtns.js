import React from 'react';
import '../NavbarBtns/NavbarBtns.css';
import {Row, Col, Button } from 'react-bootstrap';


// Component for the two buttons on the right on the Navbar Component
const NavbarBtns = () => {
    return (
        <Row smd={6} className="NavbarBtns">
            <Col className="navbar-items">
                <ul>
                    <li><Button variant="warning" className="warning"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer">Обуки за компании</a></Button></li>
                    <li><Button variant="dark" className="dark"><a href="https://www.brainster.io/business" target="_blank" rel="noopener noreferrer">Вработи наши студенти</a></Button></li>
                </ul>
            </Col>
        </Row>
    )
}

export default NavbarBtns;