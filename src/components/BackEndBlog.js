import React from 'react';
import {Row, Col, Card} from 'react-bootstrap/';
import './BlogPost.css';

function BackEndBlog() {
    return (
        <div>
            <Row xs={1} className="g-4 p-5">
                <Col>
                    <Card className="shadow p-4 mb-5 bg-body rounded">
                        <Card.Body>
                            <Card.Title className="fs-3 fw-bold">Next Part Coming Soon!</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                            <Card.Text className="blog-post fw-normal">
                               
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default BackEndBlog
