import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap/';
import './About.css';

function About() {
    return(
            <>
            <Container className="w-100 h-100 p-3 mx-auto mt-5">
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

            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../img/ToDoList_thumbnail.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../img/ToDoList_thumbnail.png"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="../img/ToDoList_thumbnail.png"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </>
    )
}

export default About;