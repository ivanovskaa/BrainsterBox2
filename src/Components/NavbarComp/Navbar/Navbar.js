import React from 'react';
import '../Navbar/Navbar.css';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../Logo/Logo';
import BurgerManuBtn from '../BurgerManuBtn/BurgerManuBtn';
import NavbarBtns from '../NavbarBtns/NavbarBtns';

// This component is rendered differently depending on the display size
const NavigationBar = (props) => {
    return (
        <Container fluid className="NavigationBar ">
            <Row className="Navbar">

                <Col md={2} className="menu">
                    <BurgerManuBtn BurgerManuClicked={props.BurgerManuClickHandler01} />Мени
                </Col>
                <Col md={4}>
                    <Logo />
                </Col>
                <Col md={6} className="NavbarBtnsTablet">
                    <NavbarBtns />
                </Col>
            </Row>

        </Container>
    )
}

export default NavigationBar;