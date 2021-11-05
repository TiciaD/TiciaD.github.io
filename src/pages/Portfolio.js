import React from 'react';
import {Container, Row, Col, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from "react-router-dom";

function Portfolio() {
    return (
        <div>
            <Container className="card shadow-lg p-3 my-5 bg-body rounded">
                <Row>
                    <Col className="pb-3 mx-5 rounded">
                        <h2 className="p-4 fw-bold fs-1">Featured Projects</h2>
                        <Row xs={1} md={2} className="g-3 mb-5">
                            <Col>
                                <Card className="project-container h-100 text-center border-dark shadow bg-body rounded">
                                    <Card.Img variant="top" src="../img/WeatherApp_thumbnail.png"/>
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-decoration-underline">Weather App (Mobile-first)</Card.Title>
                                        <Card.Text>
                                        Weather Application that takes in a ZIP code and calls a Weather API to render information on current weather. Designed for mobile devices.
                                        </Card.Text>
                                        <Button variant="primary">View</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Tech Stack: HTML, CSS, vanilla JavaScript, axios, Bootstrap 5</Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="project-container h-100 text-center border-dark shadow bg-body rounded">
                                    <Card.Img variant="top" src="../img/TicTacToe_thumbnail.png"/>
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-decoration-underline">Tic Tac Toe</Card.Title>
                                        <Card.Text>
                                        Recreation of classic Tic Tac Toe game using class-based OOP design in vanilla Javascript. Designed for 2 human players.
                                        </Card.Text>
                                        <Button variant="primary">View</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Tech Stack: HTML, CSS, vanilla JavaScript, Bootstrap 5</Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="project-container h-100 text-center border-dark shadow bg-body rounded">
                                    <Card.Img variant="top" src="../img/ReactRestaurant_thumbnail.png"/>
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-decoration-underline">Restaurant Menu Website</Card.Title>
                                        <Card.Text>
                                        Website that calls an API with Food Items and renders them, along with randomly generated prices for each, in a menu format for a fake restaurant
                                        </Card.Text>
                                        <Button variant="primary">View</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Tech Stack: HTML, CSS, ReactJS, React-Bootstrap, axios</Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="project-container h-100 text-center border-dark shadow bg-body rounded">
                                    <Card.Img variant="top" src="../img/ToDoList_thumbnail.png"/>
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-decoration-underline">To-Do List App</Card.Title>
                                        <Card.Text>
                                        Recreation of a To-Do List application using React class components and basic CRUD principles. Features Delete and Edit buttons, and filters based on completion status. 
                                        </Card.Text>
                                        <Button variant="primary">View</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Tech Stack: HTML, CSS, SCSS, ReactJS, Bootstrap 5</Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className="card shadow-lg p-3 mb-5 bg-body rounded">
                <Row>
                    <Col className="pb-3 mx-5 rounded">
                        <h2 className="p-4 fw-bold fs-1">Possible Project Card Design</h2>
                        <Row xs={1} md={3} className="g-3 mb-5">
                            <Col>
                                <Card className="h-100 text-center border-dark shadow bg-body rounded">
                                    <Card.Img variant="top" src="../img/WeatherApp_thumbnail.png"/>
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-decoration-underline">Weather App (Mobile-first)</Card.Title>
                                        <Card.Text>
                                        Weather Application that takes in a ZIP code and calls a Weather API to render information on current weather. Designed for mobile devices.
                                        </Card.Text>
                                        <Button variant="primary">View</Button>
                                        <ListGroup className="list-group-flush mt-3">
                                            <ListGroupItem className="bg-info text-light">Tech Stack</ListGroupItem>
                                            <ListGroupItem>HTML, CSS, vanilla JavaScript, axios, Bootstrap 5</ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">October 2021</Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio
