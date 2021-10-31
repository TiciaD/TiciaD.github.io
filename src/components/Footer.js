import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Footer.css';

function Footer() {
    return (
        <div className="footer bg-white">
            <Container>
                <Row>
                    <Col className="m-3">
                        <Container>
                            <Row>
                                <Col>
                                    <a href="mailto:dunnticia633@gmail.com"><img src="../img/Email.svg" class="contact rounded" alt="..." width="50px" height="50px"/></a>
                                </Col>
                                <Col>
                                    <a href="https://github.com/TiciaD/TiciaD.github.io.git"><img src="../img/Github.svg" class="contact rounded" alt="..." width="50px" height="50px"/></a>
                                </Col>
                                <Col>
                                    <a href="https://www.linkedin.com/in/ticia-dunn-39208b178"><img src="../img/linkedin.svg" class="contact rounded" alt="..." width="50px" height="50px"/></a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
