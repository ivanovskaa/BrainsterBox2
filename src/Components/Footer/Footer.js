import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import Links from './Links/Links';
import logo from '../../Components/imgs/logo.png';
import SocialMedia from './SocialMedia/SocialMedia';


// This component is rendered differently depending on the display size
const Footer = () => {
    return (
        <Container fluid className="Footer">
            <Row md={12}>
                <Col md={5}>
                    <Links />
                </Col>
                <Col md={2}>
                    <img className="logo" src={logo} alt="brainster"/>
                </Col>
                <Col md={5}>
                    <SocialMedia />
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;