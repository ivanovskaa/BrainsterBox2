import React from 'react';
import './HeaderText.css';
import { Row, Button } from 'react-bootstrap';


class HeaderText extends React.Component {
    render() {
        return (
            <Row className="HeaderText">
                <h1>future-proof your organization</h1>

                <h5>Find out how to unlock progress in your business. Understand your current state, identify opportunity areas and prepare to take charge of your organization'sfuture.</h5>

                <Button variant="warning"><a href="https://brainsterquiz.typeform.com/to/kC2I9E" target="_blank" rel="noopener noreferrer">Take the assessment</a></Button>
            </Row>
        )
    }
}

export default HeaderText;