import React from 'react';
import {Container, Row, Col, Carousel, Card} from 'react-bootstrap/';
import './About.css';

function About() {
    return(
            <>
            <Container className="w-100 h-100 p-3 mx-auto mt-5 d-flex justify-content-center">
                <Row>
                    <Col className="intro px-5 pb-4 m-5 rounded text-center">
                        <img className="img-thumbnail rounded-circle mt-5 p-2 border border-primary" src="../img/ProfilePic (2).jpg" alt="..." width="200px" height="200px"/>
                        <h1 className="p-3">About Me</h1>
                        <p className="lead fs-3">Hi! I'm an aspiring <span className="fw-bolder hover-underline-animation">web developer</span>, <span className="fw-bolder hover-underline-animation">artist</span> and former chemist from Louisville, Kentucky</p>
                        <hr />
                        <p className="lead fs-3 p-3">
                        I'm originally from Louisville, KY, born and raised (go Cards!), before I went to college at Morehead State University. It took me 6 years but I finally received a Bachelor's of Science degree 
                        in Chemistry in 2020. Unfortunately, in my desperation to graduate, I settled on a major I didn't like since I had more credits towards it. This resulted in me going into the workforce with a 
                        Chemistry degree and being dissatisfied with the jobs I was working in. So I made a decision to go back to school, but what would I study?
                        </p>
                        <p className="lead fs-3 p-3">As I searched for career change options, Computer Science popped up over and over. I decided to look more into it and it seemed that it would satisfy everything that I was looking for in a career, 
                            that I couldn't find in my other jobs. I decided to enroll back in college but I didn't want to wait another 2-3 years to get that degree before starting to get experience in the field. That's 
                            when I found the Awesome Inc. Bootcamp! I took a leap of faith to sign up for it and have had a blast learning everything I can about code in such a short amount of time!
                        </p>
                        <p className="lead fs-3 p-3">I can't wait to get back out in the workforce and become a real developer, applying everything I've learned so far and still learning something new everyday! As I've developed a new passion for 
                        coding, I still want to have time enjoy some of my other hobbies, like art, playing with my pets and traveling to events all over the country.
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className="mx-auto pb-4 d-flex justify-content-center">
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
                    <Col>
                        <Card>
                        <Card.Header className="fw-bold fs-2">Just Me</Card.Header>
                        <Carousel className="p-2">
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../img/myPicturesofMe/Hamilton_me.jpg"
                                alt="First slide"
                                height="800px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../img/myPicturesofMe/turtle_me.jpg"
                                alt="Second slide"
                                height="800px"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="../img/myPicturesofMe/UFC_me.jpg"
                                alt="Third slide"
                                height="800px"
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