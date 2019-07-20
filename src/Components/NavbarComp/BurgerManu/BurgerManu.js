import React from 'react';
import '../BurgerManu/BurgerManu.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png';


const BurgerManu = (props) => {
    return (
        <div className="BurgerManu">
            <div className="manu-close-btn">
                <img src={logo} alt="logo" />
                <Button variant="light" className="closeBtn" onClick={props.BurgerManuClickHandler02}><i className="fa fa-times"></i></Button>
                <span>Затвори</span>
            </div>
            <ul>
                <li><Link to="/Registration">Најави се</Link></li>
                <li><Link to="/Registration">Регистрирај се</Link></li>
                <li><Link to="/AboutUs">За Нас</Link></li>
                <li><a href="https://www.facebook.com/pg/brainster.co/photos/" target="_blank" rel="noopener noreferrer">Галерија</a></li>
                <li><Link to="/ContactUs">Контакт</Link></li>
            </ul>
        </div>
    )
}

export default BurgerManu;