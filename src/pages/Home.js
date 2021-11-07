import React from 'react';
import {Container, Row, Col, Card, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <>
        <Container>
            <Row>
                <Col lg={{ span: 8, offset: 2 }}>
                    <Container className="card p-2 mx-auto m-5">
                        <Row>
                            <Col className="px-3 m-4 rounded text-center">
                                <img className="profile-pic img-thumbnail rounded-circle mt-5 p-2 border border-primary" src="../img/ProfilePic (2).jpg" alt="..." width="200px" height="200px"/>
                                <h1 className="p-2 fw-bold title-name">Ticia Dunn</h1>
                                <p className="fs-3 fw-lighter">Hi! I'm an aspiring <span className="fw-bolder hover-underline-animation">web developer</span>, <span className="fw-bolder hover-underline-animation">artist</span> and former chemist from Louisville, Kentucky</p>
                                <p className="lead p-3">
                                    <Button as={Link} to="/about" variant="primary" size="lg">Learn More</Button>
                                </p>
                                <Col>
                                    <Container className="mb-5">
                                        <Row>
                                            <Col>
                                                <a href="mailto:dunnticia633@gmail.com"><img className="contact-card rounded" src="../img/Email.svg" alt="email" width="50px" height="50px"/></a>
                                            </Col>
                                            <Col>
                                                <a href="https://github.com/TiciaD"><img className="contact-card rounded" src="../img/Github.svg" alt="github" width="50px" height="50px"/></a>
                                            </Col>
                                            <Col>
                                                <a href="https://www.linkedin.com/in/ticia-dunn-39208b178"><img className="contact-card rounded" src="../img/linkedin.svg" alt="linkedin" width="50px" height="50px"/></a>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>

            <Container className="card shadow-lg p-3 mb-5 bg-body rounded">
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

            <Container >
                <Row>
                    <Col className="p-4 shadow p-3 mb-5 bg-body rounded" lg={{ span: 10, offset: 1 }}>
                        <Card>
                            <Card.Header as="h5" className="fw-bold fs-3">Featured Blog Post</Card.Header>
                            <Card.Body>
                                <Card.Title className="fs-4 fw-bold">Part 1: Web Development 101</Card.Title>
                                <Card.Text className="fs-4">
                                Was the first week of bootcamp what I expected? Somehow the answer is both yes and no.
                                Yes in that I knew I'd be facing challenges and blockers since this is so new to me and I definitely have had some struggles getting things to work how I wanted.
                                But no in that I thought we'd jump right into programming languages, I didn't even think about the stuff you'd need to know beforehand!
                                Though to be fair, I didn't really know anything about the CLI and how to naivigate that with its various commands or about Github and its usefulness in 
                                collaborations but now I do and understand why we'd need a good grasp of these concepts before diving into any language.
                                </Card.Text>
                                <Button variant="primary" as={Link} to="/blog">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
