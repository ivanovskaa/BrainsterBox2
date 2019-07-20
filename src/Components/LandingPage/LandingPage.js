import React from 'react';
import '../LandingPage/LandingPage.css';
import { Container, Row } from 'react-bootstrap';
import CompleteNavbar from '../NavbarComp/CompleteNavbar';
import HeaderText from '../Header/HeaderText/HeaderText';
import GameCont from '../Game/GameCont/GameCont';
import Footer from '../Footer/Footer';
import NavbarBtns from '../NavbarComp/NavbarBtns/NavbarBtns';



const LandingPage = () => {
  return (
    <Container fluid className="LandingPage top-button-bg">
      <Row className="topPage">
        <CompleteNavbar />
        <p className="HeaderPara">Изработено од студенти на академијата за програмирање на <a href="https://brainster.co/" target="_blank" rel="noopener noreferrer">Brainster</a></p>
      </Row>

      <Row className="NavBtns">
        <NavbarBtns />
      </Row>

      <Row className="middlePage">
        <HeaderText />
        <GameCont />
      </Row>
      
      <Row className="bottomPage">
        <HeaderText />
        <Footer />
      </Row>
    </Container>
  )
}

export default LandingPage;

