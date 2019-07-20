import React from 'react';
import '../../Components/AboutUs/AboutUs.css';
import { Container, Row } from 'react-bootstrap';
import logo from '../imgs/logo.png';
import CompleteNavbar from '../NavbarComp/CompleteNavbar';
import Footer from '../Footer/Footer';
import BlankFooter from '../Footer/BlankFooter/BlankFooter';


class AboutUs extends React.Component {
    render() {
        return (
            <Container fluid className="AboutUs">

                <CompleteNavbar />
                
                <Container className="AboutBrainster">
                    <Row>
                        <h1>Ајде заедно да го промениме начинот на кој учиме!</h1>
                        <p>
                            Нашата мисија е заедно да го промениме начинот на кој учиме!
                            Ние веруваме дека секој поседува практични вештини да предава како и постојана потреба да стекнува нови знаења и затоа гo создадовме Brainster. Brainster е платформа за офлајн курсеви каде ќе можете да предавате и да посетувате курсеви на најразлични теми - од курсеви за изработка на мобилни апликации, до курсеви за улична фотографија.
                        </p>
                    </Row>
                    <Row>
                        <h1>
                            Имаме визија  да го претвориме целиот град во универзитет, секој простор во училница и секој од нас во инструктор и студент.
                        </h1>
                        <p>
                            Затоа, ние Ви овозможуваме активно да учествувате во градењето на локалната 2.0 заедница, да се вмрежите со луѓе со слични интереси, да креирате, да го споделувате Вашето знаење и да учите од другите.

                            Нашата прва станица е Скопје. Очекувајте нѐ во октомври на различни кул локации како co-working простории, работилници, акселератори, па дури и во кафулиња.
                        </p>
                    </Row>

                    <Row className="BrainsterNo">
                        <h1><img src={logo} alt="logo"></img>низ бројки</h1>
                        <ul className="Numb">
                            <li className="bigger">400+</li>
                            <li>Одржани курсеви</li>
                        </ul>
                        <ul className="Numb">
                            <li className="bigger">40+</li>
                            <li>Партнерски компании</li>
                        </ul>
                        <ul className="Numb">
                            <li className="bigger">4000+</li>
                            <li>Учесници</li>
                        </ul>
                        <ul className="Numb">
                            <li className="bigger">36+</li>
                            <li>Инструктори</li>
                        </ul>
                    </Row>
                </Container>

                <BlankFooter />
                <Footer />

            </Container>
        )
    }
}

export default AboutUs;