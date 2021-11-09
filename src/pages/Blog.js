import React from 'react';
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap';
import OnboardingBlog from '../components/OnboardingBlog';
import FrontEndBlog from '../components/FrontEndBlog';
import BackEndBlog from '../components/BackEndBlog';
import './Blog.css';

function Blog() {
    return (
        <div>
            <Container className="w-100 h-100 p-1 mx-auto d-flex justify-content-center">
                <Row>
                    <Col className="intro px-5 pb-4 m-5 rounded text-center">
                        <h1 className="p-4 fw-bold title-name">Ticia's Awesome Blog</h1>
                        <p className="fs-4">Follow me on my Awesome Inc Bootcamp Journey!</p>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="onboarding" id="uncontrolled-tab-example" variant="pills" className="shadow-lg p-3 bg-light rounded w-50 justify-content-center mx-auto">
                            <Tab eventKey="onboarding" title="Onboarding">
                                <OnboardingBlog />
                            </Tab>
                            <Tab eventKey="front" title="Front-End">
                                <FrontEndBlog />
                            </Tab>
                            <Tab eventKey="back" title="Back-End">
                                <BackEndBlog />
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blog
