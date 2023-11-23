import React from "react";
import './Services.css';
import image from './dose-juice-sTPy-oeA3h0-unsplash.jpg'
import { Container, Row, Col } from 'react-bootstrap';

function Services(){
    return(
        <div>
        <Container>
      <Row>
        <Col sm={8}>
          <h1>Title</h1>
          <p>Some text here...</p>
        </Col>
        <Col sm={4}>
          <img src={image} alt="description" className="rounded-circle" style={{height:'25rem'}} />
        </Col>
        <Col sm={8}>
          <h1>Title</h1>
          <p>Some text here...</p>
        </Col>
        <Col sm={4}>
          <img src={image} alt="description" className="rounded-circle" style={{height:'25rem'}} />
        </Col>
        <Col sm={8}>
          <h1>Title</h1>
          <p>Some text here...</p>
        </Col>
        <Col sm={4}>
          <img src={image} alt="description" className="rounded-circle" style={{height:'25rem'}} />
        </Col>
        </Row>
        </Container>
        </div>
    )
}

export default Services;