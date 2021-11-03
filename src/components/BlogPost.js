import React from 'react';
import {Row, Col, Card} from 'react-bootstrap/';

function BlogPost(props) {
    const { id, title, post } = props.data;
    return (
            <Row xs={1} className="g-4 p-5">
                <Col>
                    <Card className="shadow p-3 mb-5 bg-body rounded">
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{id}</Card.Subtitle>
                            <Card.Text>
                            {post}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    )
}

export default BlogPost
