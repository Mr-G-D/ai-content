import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap'
import { callAPI } from '../OpenAIAPI.js'

function GeneratorContainer(props) {

    return (
        <div id="main-content">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <h1>Blog Post Ideas</h1>
                        <p id="pageDescription">Enter your your content topic to generate a list of blog post ideas. </p>


                        <Form onSubmit={this.onFormSubmit}>
                            <Form.Group className="mb-3" controlId="textArea">
                                <Form.Label>Topic:</Form.Label>
                                <Form.Control as="textarea" name="topic" placeholder="e.g. Finance" />
                            </Form.Group>
                            <Button variant="primary" size="md" type="submit">Submit</Button>
                        </Form>
                    </Col>

                    <Col xs={12} md={8}>
                        <Card className="text-center">
                            <Card.Header><h2>{this.state.heading}</h2></Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    <p className="pre-wrap">{this.state.response}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default GeneratorContainer;