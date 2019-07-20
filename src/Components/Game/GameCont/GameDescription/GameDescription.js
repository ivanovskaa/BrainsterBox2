import React from 'react';
import './GameDescription.css';
import Axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import CompleteNavbar from '../../../NavbarComp/CompleteNavbar';
import GameDescFooter from './GameDescFooter';
import Footer from '../../../Footer/Footer';
import HeaderText from '../../../Header/HeaderText/HeaderText';
import NavbarBtns from '../../../NavbarComp/NavbarBtns/NavbarBtns';

// Component which opens on click on GameCard Component and renders information for each API's Id respectively
class GameDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: parseInt([this.props.match.params.id]),
            gameDescription: [],
            gameSteps: []
        }
    }

    componentDidMount() {
        let id = this.state.ID;
        Axios.get(`https://brainsterboxapi.herokuapp.com/games/` + id)
            .then(res => {
                this.setState({
                    gameDescription: res.data,
                    gameSteps: res.data.steps
                })
            });
    }

    render() {
        return (
            <div className="GameDescroptionMain">
                <div className="GameDescription">
                    <Container fluid className="HeadCont">
                        <CompleteNavbar />
                    </Container>

                    <Container fluid>
                        <Row className="NavBtns">
                            <NavbarBtns />
                        </Row>
                        <Container className="Grey">
                            <Row>
                                <h1>{this.state.gameDescription.title}</h1>
                            </Row>
                            <Row className="BreafInfo">
                                <Col md={3}>
                                    <ul className="info">
                                        <li className="icons"><i className="far fa-clock"></i> Time Frame</li>
                                        <li className="urlLi">{this.state.gameDescription.timeFrame}</li>
                                    </ul>
                                </Col>
                                <Col md={3}>
                                    <ul className="info">
                                        <li className="icons"><i className="fas fa-user-friends"></i> Group Size</li>
                                        <li className="urlLi">{this.state.gameDescription.groupSize}</li>
                                    </ul>
                                </Col>
                                <Col md={3}>
                                    <ul className="info">
                                        <li className="icons"><i className="fas fa-landmark"></i> Facilitation Level</li>
                                        <li className="urlLi">{this.state.gameDescription.level}</li>
                                    </ul>
                                </Col>
                                <Col md={3}>
                                    <ul className="info">
                                        <li className="icons"><i className="fas fa-paint-roller"></i> Materials</li>
                                        <li className="urlLi">{this.state.gameDescription.materials}</li>
                                    </ul>
                                </Col>
                            </Row>

                            <Row className="DetailInfo">
                                <Col md={12} className="boxDetail">
                                    <p>{this.state.gameDescription.description}</p>
                                </Col>
                                <Col md={12} className="gameDetail">
                                    <p>
                                        {this.state.gameSteps.map(step => {
                                            return (
                                                <p>
                                                    <hr></hr> 
                                                    <span><b>{step.step.split('/n').map((item, i) => < p key={i}>{item}</p>)}</b> </span>
                                                    <span>{step.stepDescription.split('/n').map((item, i) => <p key={i}>{item}</p>)} </span>
                                                </p>
                                            )
                                        })}
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                        <Container fluid className="BottonBg">
                            <Row className="BottonBg">
                                <GameDescFooter />
                                <HeaderText />
                                <Footer />
                            </Row>
                        </Container>
                    </Container>
                </div>
            </div>
        )
    }
}

export default GameDescription;