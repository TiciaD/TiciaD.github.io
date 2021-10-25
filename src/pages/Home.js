import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Home.css";

export default function Home() {
    return (
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
                        <NavDropdown.Divider />
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
                        <p className="lead">Hi I'm an aspiring web developer, artist and former chemist from Louisville, Kentucky</p>
                        <p className="lead p-4">
                            <Button variant="secondary" size="lg">Learn More</Button>
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col className="projects px-5 m-5 rounded">
                        <h2 class="p-4">My Projects</h2>
                        <Row xs={1} md={2} className="g-4 mb-5">
                            {Array.from({ length: 4 }).map((_, idx) => (
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="holder.js/100px160" />
                                        <Card.Body>
                                        <Card.Title>Project</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.
                                        </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    <Col>
                        <Card className="p-4 shadow p-3 mb-5 bg-body rounded">
                            <Card.Header as="h5">Featured Blog Post</Card.Header>
                            <Card.Body>
                                <Card.Title>Special title treatment</Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <div class="footer bg-white">
               <Container>
                    <Row>
                        <Col className="px-5 m-3">
                            Contact Me
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
