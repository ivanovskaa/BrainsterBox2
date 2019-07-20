import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row} from 'react-bootstrap';
import LandingPage from './Components/LandingPage/LandingPage';
import GameDescription from './Components/Game/GameCont/GameDescription/GameDescription';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/Contact/ContactUs';
import Register from './Components/Register/Register';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Container fluid>
                        <Row>
                            <Switch>
                                <Route exact path="/" component={LandingPage} />
                                <Route path="/GameDescription/:id"  component={GameDescription}/>
                                <Route path="/AboutUs" component={AboutUs}/>
                                <Route path="/ContactUs" component={ContactUs}/>
                                <Route path="/Registration" component={Register}/>
                            </Switch>
                        </Row>
                    </Container>
                </Router>
            </div>
        );
    }
}

export default App;