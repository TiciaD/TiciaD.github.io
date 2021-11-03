import React from 'react';
import {Container, Row, Col, Carousel, Card} from 'react-bootstrap/';
import './About.css';

function About() {
    return(
            <>
            <Container className="w-100 h-100 p-3 mx-auto mt-5 d-flex justify-content-center">
                <Row>
                    <Col className="intro px-5 m-5 rounded text-center">
                        <img className="img-thumbnail rounded-circle mt-5 p-2 border border-primary" src="../img/ProfilePic (2).jpg" alt="..." width="200px" height="200px"/>
                        <h1 className="p-3">About Me</h1>
                        <p className="lead fs-4">Hi! I'm an aspiring <span className="fw-bolder">web developer</span>, <span className="fw-bolder">artist</span> and former chemist from Louisville, Kentucky</p>
                        <p className="lead p-3">
                        Originally I'm from Louisville, KY, born and raised (go Cards!), before I went to college at Morehead State University.
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className="m-5 d-flex justify-content-center">
                <Row xs={1} lg={2} className="gy-3 justify-content-center">
                    <Col>
                        <Card>
                        <Card.Header className="fw-bold fs-2">My Art</Card.Header>
                        <Carousel variant="dark" className="p-2">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../img/mySketches/sketch1.jpg"
                                alt="First slide"
                                height="700px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../img/mySketches/sketch2.jpg"
                                alt="Second slide"
                                height="700px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../img/mySketches/sketch3.jpg"
                                alt="Third slide"
                                height="700px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../img/mySketches/pastel1.jpg"
                                alt="Fourth slide"
                                height="700px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../img/mySketches/perlerBead.jpg"
                                alt="Five slide"
                                height="700px"
                                />
                            </Carousel.Item>
                        </Carousel>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Header className="fw-bold fs-2">My Pets</Card.Header>
                        <Carousel className="p-2">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../img/myPets/Scrappy.jpg"
                                alt="First slide"
                                height="700px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../img/myPets/Pepper.jpg"
                                alt="Second slide"
                                height="700px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../img/myPets/BennyCollage.jpg"
                                alt="Third slide"
                                height="700px"
                                />
                            </Carousel.Item>
                        </Carousel>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;