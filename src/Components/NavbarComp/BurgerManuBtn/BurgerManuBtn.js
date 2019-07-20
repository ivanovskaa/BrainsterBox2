import React from 'react';
import '../BurgerManuBtn/BurgerManuBtn.css';
import {Button} from 'react-bootstrap';

// This Component takes props from Navbar Component
const BurgerManuBtn = (props) => {
    return (
        <Button className="BurgerManuBtn" onClick={props.BurgerManuClicked}>
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
            <div className="toggle-button-line" />
        </Button>
    )
}

export default BurgerManuBtn;