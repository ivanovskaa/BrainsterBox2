import React from 'react';
import '../SocialMedia/SocialMedia.css';
import { Col } from 'react-bootstrap';


const SocialMedia = () => {
    return (
        <Col className="SocialMedia">
            <a className="icon" href="https://www.linkedin.com/school/brainster-co/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a className="icon" href="https://twitter.com/BrainsterCo" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a className="icon" href="https://www.facebook.com/brainster.co" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        </Col>
    )
}
export default SocialMedia;