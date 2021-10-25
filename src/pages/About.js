import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './About.css';

function About() {
    return(
            <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#link">ABOUT</Nav.Link>
                        <Nav.Link href="#link">PORTFOLIO</Nav.Link>
                        <NavDropdown title="BLOG" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="w-100 h-100 p-3 mx-auto mt-5">
                <Row>
                    <Col className="intro px-5 m-5 rounded">
                        <h1 className="p-4">Web Developer</h1>
                        <img src="./styles/Me.jpg" class="img-thumbnail" alt="..."/>
                        <p className="lead">Hi I'm an aspiring web developer, artist and former chemist from Louisville, Kentucky</p>
                        <p className="lead p-4">
                            <Button variant="secondary" size="lg">Learn More</Button>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;