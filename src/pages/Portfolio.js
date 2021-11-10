import React from 'react';
import {Container, Row, Col, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import {Link} from "react-router-dom";
import './Portfolio.css';

function Portfolio() {
    return (
        <div>
            <Container className="w-100 h-100 p-1 mx-auto d-flex justify-content-center">
                <Row>
                    <Col className="intro px-5 pb-4 m-5 rounded text-center">
                        <h1 className="p-4 fw-bold title-name">My Projects</h1>
                        <p className="fs-4">Check out what I've been working on!</p>
                    </Col>
                </Row>
            </Container>
            
            <Container className="card shadow-lg p-3 mb-5 bg-body rounded">
                <Row>
                    <Col className="pb-3 mx-5 rounded">
                        <h2 className="p-4 fw-bold fs-1">Vanilla JavaScript Projects</h2>
                        <Row xs={1} lg={2} className="g-3 mb-5">
                            <Col>
                                <Card className="h-100 text-center border-dark shadow bg-body rounded">
                                    <Card.Img variant="top" className="static" src="../img/TicTacToeProjectStill.jpg"/>
                                    <Card.Img variant="top" className="active" src="../gifs/TicTacToeProject.gif"/>
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-decoration-underline">Tic Tac Toe</Card.Title>
                                        <Card.Text>
                                        Recreation of classic Tic Tac Toe game using class-based OOP design in vanilla Javascript. Designed for 2 human players.
                                        </Card.Text>
                                        <a href="https://ticiad.github.io/TicTacToe/"><Button variant="primary" className="m-3">View Live URL</Button></a>
                                        <a href="https://github.com/TiciaD/TicTacToe"><Button variant="primary">View My Repo</Button></a>
                                        <ListGroup className="list-group-flush mt-3">
                                            <ListGroupItem className="bg-info text-light fs-5">Tech Stack</ListGroupItem>
                                            <ListGroupItem>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>vanilla JavaScript</li>
                                                <li>Bootstrap 5</li>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">October 2021</Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="h-100 text-center border-dark shadow bg-body rounded">
                                    <Card.Img variant="top" className="static" src="../img/WeatherProjectStill.jpg"/>
                                    <Card.Img variant="top" className="active" src="../gifs/WeatherProject.gif"/>
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-decoration-underline">Weather App (Mobile-first)</Card.Title>
                                        <Card.Text>
                                        Weather Application that takes in a ZIP code and calls a Weather API to render information on current weather. Designed for mobile devices.
                                        </Card.Text>
                                        <a href="https://ticiad.github.io/WeatherApp/"><Button variant="primary" className="m-3">View Live URL</Button></a>
                                        <a href="https://github.com/TiciaD/WeatherApp"><Button variant="primary">View My Repo</Button></a>
                                        <ListGroup className="list-group-flush mt-3">
                                            <ListGroupItem className="bg-info text-light">Tech Stack</ListGroupItem>
                                            <ListGroupItem>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>vanilla JavaScript</li>
                                                <li>axios</li>
                                                <li>Bootstrap 5</li>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">September 2021</Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className="card shadow-lg p-3 mb-5 bg-body rounded">
                <Row>
                    <Col className="pb-3 mx-5 rounded">
                        <h2 className="p-4 fw-bold fs-1">React JS Projects</h2>
                        <Row xs={1} lg={2} className="g-3 mb-5">
                            <Col>
                                <Card className="h-100 text-center border-dark shadow bg-body rounded">
                                    <Card.Img variant="top" className="static" src="../img/ToDoListProjectStill.jpg"/>
                                    <Card.Img variant="top" className="active" src="../gifs/ToDoListProject.gif"/>
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-decoration-underline">To-Do List App</Card.Title>
                                        <Card.Text>
                                        Recreation of a To-Do List application using React class components and basic CRUD principles. Features Delete and Edit buttons, and filters based on completion status.
                                        </Card.Text>
                                        <a href="https://to-do-list-awesomeinc.web.app/"><Button variant="primary" className="m-3">View Live URL</Button></a>
                                        <a href="https://github.com/TiciaD/ToDoList"><Button variant="primary">View My Repo</Button></a>
                                        <ListGroup className="list-group-flush mt-3">
                                            <ListGroupItem className="bg-info text-light fs-5">Tech Stack</ListGroupItem>
                                            <ListGroupItem>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>SCSS</li>
                                                <li>React JS</li>
                                                <li>Bootstrap 5</li>
                                            </ListGroupItem>
                                        </ListGroup>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">October 2021</Card.Footer>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="h-100 text-center border-dark shadow bg-body rounded">
                                    <Card.Img variant="top" src="../img/ReactRestaurant_thumbnail.png"/>
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-decoration-underline">Restaurant Menu Website</Card.Title>
                                        <Card.Text>
                                        Website that calls an API with Food Items and renders them, along with randomly generated prices for each, in a menu format for a fake restaurant
                                        </Card.Text>
                                        <a href="https://react-restaurant-awesomeinc.web.app/"><Button variant="primary" className="m-3">View Live URL</Button></a>
                                        <a href="https://github.com/TiciaD/ReactRestaurant"><Button variant="primary">View My Repo</Button></a>
                                        <ListGroup className="list-group-flush mt-3">
                                            <ListGroupItem className="bg-info text-light">Tech Stack</ListGroupItem>
                                            <ListGroupItem>
                                                <li>HTML</li>
                                                <li>CSS</li>
                                                <li>React JS</li>
                                                <li>axios</li>
                                                <li>React-Bootstrap</li>
                                            </ListGroupItem>
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
