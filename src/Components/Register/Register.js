import React from 'react';
import '../Register/Register.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import CompleteNavbar from '../NavbarComp/CompleteNavbar';
import Footer from '../Footer/Footer';
import BlankFooter from '../Footer/BlankFooter/BlankFooter';

// Component for registration - 
//submited informaiton is writter in console - 
//Axios Post is not used because the given API does not allow to post information.
class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surname: '',
            email: '',
            company: '',
            number: '',
            employees: '',
            sector: '',
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
            company: '',
            number: '',
            employees: '',
            sector: '',
            message: ''
        })
        console.log(`This form was submitted with the following data:`);
        console.log(this.state);
    }

    render() {
        return (
            <Container fluid className="Register">
                <CompleteNavbar></CompleteNavbar>

                <Container className="RegisterBrainster">
                    <Row>
                        <Col>
                            <Form className="RegisterForm"  >
                                <div>
                                    <h3>формулар за регистрација</h3>
                                </div>
                                <Row>
                                    <Form.Label className="Label" size="lg">Име:</Form.Label>
                                    <Form.Control size="lg" type="text" name="name" placeholder="Внесете го Вашето име" value={this.state.name} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <Form.Label className="Label" size="lg">Презиме:</Form.Label>
                                    <Form.Control size="lg" type="text" name="surname" placeholder="Внесете го Вашето презиме" value={this.state.surname} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <Form.Label className="Label" size="lg">E-mail:</Form.Label>
                                    <Form.Control size="lg" type="email" name="email" placeholder="Внесете ја Вашата e-mail адреса" value={this.state.email} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <Form.Label className="Label" size="lg">Компанија:</Form.Label>
                                    <Form.Control size="lg" type="text" name="company" placeholder="Внесете го името на компаниајата во која работите" value={this.state.company} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <Form.Label className="Label" size="lg">Телефонски број:</Form.Label>
                                    <Form.Control size="lg" type="text" name="number" placeholder="Венсете го Вашиот телефонски број" value={this.state.number} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <Form.Group>
                                        <Form.Label className="Label" size="lg">Број на вработени во Вашата компанија:</Form.Label>
                                        <Form.Control name="employees" as="select" value={this.state.emploees} onChange={this.handleChange}>
                                            <option>Одберете број на вработени</option>
                                            <option>1</option>
                                            <option>од 2 до 10</option>
                                            <option>од 11 до 50</option>
                                            <option>од 51 до 200</option>
                                            <option>над 200</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group>
                                        <Form.Label className="Label" size="lg" >Сектор во кој работите:</Form.Label>
                                        <Form.Control name="sector" as="select" value={this.state.sector} onChange={this.handleChange}>
                                            <option >Одберете Сектор во кој работите</option>
                                            <option>Човечки ресурси</option>
                                            <option>Маркетинг</option>
                                            <option>Продукт</option>
                                            <option>Продажба</option>
                                            <option>СЕО</option>
                                            <option>Друг сектор</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Label className="Label" size="lg">Порака:</Form.Label>
                                    <Form.Control as="textarea" rows="6" type="text" name="message" placeholder="Внесете ја Вашата порака" value={this.state.message} onChange={this.handleChange} />
                                </Row>
                                <Row>
                                    <Col>
                                        <Button className="submitBtn" type="submit" variant="outline-secondary" size="md" onClick={this.handleSubmit} >Регистрирај се</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <BlankFooter />
                <Footer />
            </Container>
        )
    }
}

export default Register;