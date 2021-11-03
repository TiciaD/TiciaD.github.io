import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <div className="footer bg-white">
            <Container>
                <Row className="">
                    <Col xs={2} sm={3} className="align-self-center">Contact Me!</Col>
                    <Col xs={4} sm={6} lg={6} className="my-3">
                        <Container>
                            <Row xs="auto" className="d-flex justify-content-center">
                                <Col>
                                    <a href="mailto:dunnticia633@gmail.com"><img src="../img/Email.svg" className="contact rounded" alt="..." width="30px" height="30px"/></a>
                                </Col>
                                <Col>
                                    <a href="https://github.com/TiciaD/TiciaD.github.io.git"><img src="../img/Github.svg" className="contact rounded" alt="..." width="30px" height="30px"/></a>
                                </Col>
                                <Col>
                                    <a href="https://www.linkedin.com/in/ticia-dunn-39208b178"><img src="../img/linkedin.svg" className="contact rounded" alt="..." width="30px" height="30px"/></a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col xs={6} sm={3} className="align-self-center">
                    Copyright Ticia Dunn
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
