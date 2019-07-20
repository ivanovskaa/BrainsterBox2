import React from 'react';
import '../Contact/ContactUs.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CompleteNavbar from '../NavbarComp/CompleteNavbar';
import BlankFooter from '../Footer/BlankFooter/BlankFooter';
import Footer from '../Footer/Footer';
import Map from '../imgs/Map.jpg';

// Component for Contac the Company - 
//submited informaiton is writter in console - 
//Axios Post is not used because the given API does not allow to post information.
class ContactUs extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname: '',
            email: '',
            number: '',
            message: ''
        }
    }
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        // taking the enteres value for each input name 
        this.setState({
            [name]: value,
        })
    }
    
    // on Submit entered info are writen in console and the input field are cleared for new entry
    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            name: '',
            surname: '',
            email: '',
            number: '',
            message: ''
        })
        console.log(`This form was submitted with the following data:`);
        console.log(this.state);
    }

    render() {
        return (
            <Container fluid className="ContactUs">

                <CompleteNavbar />

                <Container className="ContactBrainster">
                    <Row>
                        <Col md={6} className="Left" >
                            <Form>
                                <Row>
                                    <h3>Контактирајте нè!</h3>
                                    <p>За секое Ваше прашање околу нашите услуги можете да не контактирате во секое време, тука сме само за Вас!</p>
                                </Row>
                                <Row>
                                    <Form.Label size="lg">Име:</Form.Label>
                                    <Form.Control size="lg" type="text" name="name" placeholder="Внесете го Вашето име" value={this.state.name} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <Form.Label size="lg">Презиме:</Form.Label>
                                    <Form.Control size="lg" type="text" name="surname" placeholder="Внесете го Вашето презиме" value={this.state.surname} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <Form.Label className="Label" size="lg">E-mail:</Form.Label>
                                    <Form.Control size="lg" type="email" name="email" placeholder="Внесете ја Вашата e-mail адреса" value={this.state.email} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <Form.Label size="lg">Телефонски број:</Form.Label>
                                    <Form.Control size="lg" type="text" name="number" placeholder="Венсете телефонски број за контакт" value={this.state.number} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <Form.Label size="lg">Прашање / Забелешка:</Form.Label>
                                    <Form.Control as="textarea" rows="6" type="text" name="message" placeholder="Внесете ја Вашата порака" value={this.state.message} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className="SendBtn" type="submit" variant="outline-secondary" size="md" onSubmit={this.handleSubmit}>Испрати порака</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>

                        <Col md={6} className="CompanyInfos">
                            <img src={Map} alt="map" />

                            <ul>
                                <li><i className="fas fa-phone"></i> +389 70 38 47 28</li>
                                <li><i className="far fa-envelope"></i> contact@brainster.co</li>
                                <li><i className="fas fa-map-marker-alt"></i> ул. „Востаничка“ бр.140, 1000 Скопје</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>

                <BlankFooter />
                <Footer />
            </Container>
        )
    }
}

export default ContactUs;