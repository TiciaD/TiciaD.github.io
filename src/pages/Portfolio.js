import React from 'react';
import {Container, Row, Col, Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';


function Portfolio() {
    return (
        <div>
            <Container className="card shadow-lg p-3 mb-5 bg-body rounded">
                <Row>
                    <Col className="pb-3 mx-5 rounded">
                        <h2 className="p-4 fw-bold fs-1">Featured Projects</h2>
                        <Row xs={1} md={2} className="g-3 mb-5">
                            <Col>
                                <Card className="h-100 text-center border-dark shadow bg-body rounded">
                                    <Card.Img variant="top" src="../img/WeatherApp_thumbnail.png"/>
                                    <Card.Body>
                                        <Card.Title className="fw-bolder text-decoration-underline">Weather App (Mobile-first)</Card.Title>
                                        <Card.Text>
                                        Weather Application that takes in a ZIP code and calls a Weather API to render information on current weather. Designed for mobile devices.
                                        </Card.Text>
                                        <ListGroup className="list-group-flush">
                                            <ListGroupItem className="bg-info text-light">Tech Stack</ListGroupItem>
                                            <ListGroupItem>HTML, CSS, vanilla JavaScript, axios, Bootstrap 5</ListGroupItem>
                                        </ListGroup>
                                        <Button variant="primary">View</Button>
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
