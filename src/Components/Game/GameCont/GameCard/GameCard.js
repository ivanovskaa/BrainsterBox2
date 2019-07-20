import React from 'react';
import './GameCard.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


// Component for rendering Game Cards with information took from the GameCont Component Axios call
const GameCard = (props) => {
    return (
        <Col lg={4} md={12} xs={12} className="GameCard">
            <Link to={`/GameDescription/${props.id}`}>
                <img className="gameLogo" src={props.image} alt="gamelogo" />
                <Row className="GameText">
                    <Col className="GameName">
                        <h5>{props.title}</h5>
                        <h6>Категорија: <span>{props.category}</span></h6>
                    </Col>
                    <Col className="gameLogo-small-box">
                        <img className="gameLogo-small" src={props.image} alt="gamelogo" />
                    </Col>
                    <Col>
                        <p><i className="far fa-clock"></i>  Времетраење:</p>
                        <h6 className="time">{props.time}</h6>
                    </Col>
                </Row>
            </Link>
        </Col>
    )
}

export default GameCard;